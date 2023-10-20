export interface RPCFunctions {
  token: () => Promise<DesignTokenMap>;
}

export interface DesignToken {
  value: string;
  variable: string;
}

export interface TokenMode {
  $initial: string;
  $dark: string;
}

export interface DesignTokenMap {
  [k: string]: {
    [k: string]: DesignToken;
  };
}
