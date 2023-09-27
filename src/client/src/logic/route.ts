export function useTokenRouter() {
  const router = useRouter();
  const activeRoute = computed(() =>
    router.currentRoute.value.path.replace("/", "")
  );

  function routeToToken(name: string) {
    router.push(`/${name}`);
  }

  return {
    activeRoute,
    routeToToken,
  };
}
