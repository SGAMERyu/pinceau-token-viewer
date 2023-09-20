import { readFile } from "node:fs/promises";
import sirv from "sirv";
import { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import pico from "picocolors";
import { join } from "pathe";
import { DIR_CLIENT } from "../dir";
import { parseAst, visitAst } from "../ast";

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
    const keys: string[] = [];
    visitAst(parseAst(content), {
      visitExportNamedDeclaration(path) {
        const declaration = path.node.declaration;
        if (declaration?.type === "VariableDeclaration") {
          const variableDeclarator = declaration.declarations[0] as any;
          const variableName = variableDeclarator.id.name;
          if (variableName === "theme") {
            return this.traverse(path, {
              visitObjectProperty(path: any) {
                console.log(
                  path.value.key.name,
                  path.value.value.value,
                  path?.parentPath?.parentPath?.parentPath?.value?.key?.name
                );
                keys.push(path.value.key.name);
                return this.traverse(path);
              },
            });
          }
        }
        return false;
      },
    });
    console.log(keys);
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
      findPinceauDesignToken();
      createPinceauServer(server);
    },
  };

  return plugin;
}
