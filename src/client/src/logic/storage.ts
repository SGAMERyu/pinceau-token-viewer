import { DesignTokenMap } from "../../../types";
import { rpc } from "./rpc";

export function useToken() {
  const refToken = ref<DesignTokenMap>({});

  const tokenNameList = computed(() => {
    return Object.keys(refToken.value);
  });

  const fetchToken = async () => {
    const token = await rpc.token();
    console.log(token);
    refToken.value = token;
  };

  return {
    refToken,
    tokenNameList,
    fetchToken,
  };
}
