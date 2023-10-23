export function flatToken(token: Record<string, any>) {
  const result: Record<string, string> = {};

  function deepFlatObject(token: Record<string, any>, prefix: string) {
    Object.entries(token).forEach(([key, item]) => {
      const tokenKey = prefix ? `${prefix}-${key}` : key;
      if (typeof item === "object") {
        if (!Reflect.has(item, "value")) {
          deepFlatObject(item, tokenKey);
        } else {
          result[tokenKey] = item.value;
        }
      } else {
        result[tokenKey] = item;
      }
    });
  }

  deepFlatObject(token, "");

  return result;
}
