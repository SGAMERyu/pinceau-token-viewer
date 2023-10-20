import { DesignTokenMap, TokenMode } from "../../../types";
import { getProperty } from "dot-prop";

export function parseColor(
  token: DesignTokenMap,
  color: string | TokenMode
): string {
  if (typeof color === "string") return color;
  const { $initial } = color;
  if (!isTokenPath($initial)) return $initial;
  const modeColor = getProperty(
    token,
    convertVariableToPath($initial).replace(/[{}]/g, "")
  );
  return modeColor!.value as any as string;
}

function convertVariableToPath(input: string): string {
  const regex = /var\(--([^)]+)\)/g;
  const result = input.replace(regex, (...matches) => {
    const variable = matches[1];
    const path = variable.replace(/-/g, ".");
    return path;
  });
  return result;
}

function isTokenPath(token: string) {
  return token.startsWith("var(--");
}

function extractValuesFromString(input: string): string[] {
  const regex = /\{([^}]+)\}/g;
  const matches = input.match(regex);
  if (matches) {
    return matches.map((match) => match.slice(1, -1));
  }
  return [];
}

export function replaceVariableToken(
  tokenMap: DesignTokenMap,
  tokenValue: string
) {
  const values = extractValuesFromString(tokenValue);
  const tokenList = values.map((dotProp) => {
    return {
      dotProp,
      propValue: getProperty(tokenMap, dotProp)!.value,
    };
  });
  tokenList.forEach(({ dotProp, propValue }) => {
    tokenValue = tokenValue.replaceAll(
      `{${dotProp}}`,
      propValue as any as string
    );
  });

  return tokenValue;
}
