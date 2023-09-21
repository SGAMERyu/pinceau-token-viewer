import { readFile } from "node:fs/promises";
import sirv from "sirv";
import { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import pico from "picocolors";
import { join } from "pathe";
import { dset } from "dset";
import { createRPCServer } from "vite-dev-rpc";
import { DIR_CLIENT } from "../dir";
import { parseAst, visitAst } from "../ast";
import { DesignTokenMap, RPCFunctions } from "../types";

const PLUGIN_NAME = "vite-plugin-pinceau-viewer";

export interface Options {
  designTokenDir: string;
}

export default function PluginPinceauViewer(options: Options) {
  const { designTokenDir } = options;

  let config: ResolvedConfig;

  function createPinceauServer(server: ViteDevServer) {
    const base = server.config.base || "/";
    server.middlewares.use(
      `${base}__pinceau`,
      sirv(DIR_CLIENT, {
        single: true,
        dev: true,
      })
    );

    const _print = server.printUrls;
    server.printUrls = () => {
      let host = `${config.server.https ? "https" : "http"}://localhost:${
        config.server.port || "80"
      }`;

      const url = server.resolvedUrls?.local[0];

      if (url) {
        try {
          const u = new URL(url);
          host = `${u.protocol}//${u.host}`;
        } catch (error) {
          console.warn("Parse resolved url failed:", error);
        }
      }

      _print();

      const colorUrl = (url: string) =>
        pico.green(
          url.replace(/:(\d+)\//, (_, port) => `:${pico.bold(port)}/`)
        );
      // eslint-disable-next-line no-console
      console.log(
        `  ${pico.green("➜")}  ${pico.bold("Pinceau")}: ${colorUrl(
          `${host}${base}__pinceau/`
        )}`
      );
    };
  }

  async function findPinceauDesignToken() {
    const deignTokenPath = join(designTokenDir, "index.ts");
    const content = await readFile(deignTokenPath, "utf-8");
    const result = {};
    let rootKeyName = "";
    visitAst(parseAst(content), {
      visitExportNamedDeclaration(path) {
        const declaration = path.node.declaration;
        if (declaration?.type === "VariableDeclaration") {
          const variableDeclarator = declaration.declarations[0] as any;
          const variableName = variableDeclarator.id.name;
          if (variableName === "theme") {
            return this.traverse(path, {
              visitObjectProperty(path: any) {
                const key = path.value.key.name;
                const value = path.value.value.value;
                const parentKey =
                  path?.parentPath?.parentPath?.parentPath?.value?.key?.name;
                if (key && !value && !parentKey) {
                  rootKeyName = key;
                  dset(result, key, {});
                }
                if (key && !value && parentKey) {
                  dset(result, `${parentKey}.${key}`, {});
                }
                if (key && value && parentKey) {
                  dset(result, `${rootKeyName}.${parentKey}.${key}`, value);
                }
                return this.traverse(path);
              },
            });
          }
        }
        return false;
      },
    });
    return result;
  }

  function createPinceauRpc(
    server: ViteDevServer,
    designTokenMap: DesignTokenMap
  ) {
    createRPCServer<RPCFunctions>("vite-plugin-pinceau-viewer", server.ws, {
      token() {
        return designTokenMap;
      },
    });
  }

  async function initPinceauViewer(server: ViteDevServer) {
    const designTokenMap = await findPinceauDesignToken();
    createPinceauServer(server);
    createPinceauRpc(server, designTokenMap);
  }

  const plugin = <Plugin>{
    name: PLUGIN_NAME,
    enforce: "pre",
    apply(_, { command }) {
      return command === "serve";
    },
    configResolved(_config) {
      config = _config;
    },
    configureServer(server) {
      initPinceauViewer(server);
    },
  };

  return plugin;
}
