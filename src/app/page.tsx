import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { TestComponent } from "@/app/components/Test";
import { getAddresses } from "@/app/utils";

export default async function Home() {
  const addresses = await getAddresses();

  const queryClient = new QueryClient();
  queryClient.setQueryData(["addresses"], addresses);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TestComponent />
    </HydrationBoundary>
  );
}
