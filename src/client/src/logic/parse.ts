import { DesignTokenMap, TokenMode } from "../../../types";
import { getProperty } from "dot-prop";

export function parseColor(
  token: DesignTokenMap,
  color: string | TokenMode
): string {
  if (typeof color === "string") return color;
  const { initial } = color;
  const modeColor = getProperty(token, initial.replace(/[{}]/g, ""));
  return modeColor!.value as any as string;
}
