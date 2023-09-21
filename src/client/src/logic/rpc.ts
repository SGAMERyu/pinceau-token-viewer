import { createRPCClient } from "vite-dev-rpc";
import { createHotContext } from "vite-hot-client";
import { RPCFunctions } from "../../../types";

export const rpc = createRPCClient<RPCFunctions>(
  "vite-plugin-pinceau-viewer",
  (await createHotContext(
    "/___",
    `${location.pathname.split("/__pinceau")[0] || ""}/`.replace(/\/\//g, "/")
  ))!
);
