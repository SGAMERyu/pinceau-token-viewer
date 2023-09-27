export interface RPCFunctions {
  token: () => Promise<DesignTokenMap>;
}

export interface DesignToken {
  raw: string;
  value: string;
  variable: string;
}

export interface DesignTokenMap {
  [k: string]: {
    [k: string]: DesignToken;
  };
}
