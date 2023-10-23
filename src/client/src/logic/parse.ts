import { DesignTokenMap, TokenMode } from "../../../types";
import { getProperty } from "dot-prop";

export function parseColor(
  token: DesignTokenMap,
  color: string | TokenMode
): string {
  if (typeof color === "string") return color;
  const { $initial } = color;
  if (!isTokenPath($initial)) return $initial;
  return replaceVariableToTokenValue(token, $initial);
}

function isTokenPath(token: string) {
  return token.startsWith("var(--");
}

function extractVariables(input: string) {
  const regex = /var\(([^)]+)\)/g;
  const matches = input.match(regex);
  const variables = (matches || []).map((match) => match.slice(4, -1));
  return variables;
}

function convertVariableToPath(input: string) {
  const convertedPath = input.replaceAll("--", "").replaceAll("-", ".");
  return convertedPath;
}

export function replaceVariableToTokenValue(
  tokenMap: DesignTokenMap,
  tokenValue: string
) {
  const variables = extractVariables(tokenValue);
  if (variables.length === 0) return tokenValue;
  variables.forEach((variable) => {
    const tokenPath = convertVariableToPath(variable);
    tokenValue = tokenValue.replaceAll(
      `var(${variable})`,
      getProperty(tokenMap, tokenPath)!.value as any as string
    );
  });
  return tokenValue;
}
