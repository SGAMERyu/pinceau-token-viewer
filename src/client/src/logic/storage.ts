import { DesignTokenMap } from "../../../types";
import { rpc } from "./rpc";

export const refToken = ref<DesignTokenMap>({});

export const tokenNameList = computed(() => {
  return Object.keys(refToken.value);
});

export const fetchToken = async () => {
  const token = await rpc.token();
  refToken.value = token;
};
