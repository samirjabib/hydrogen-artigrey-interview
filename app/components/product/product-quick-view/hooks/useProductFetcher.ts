import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { loader } from "~/routes/products.$handle";

export function useProductFetcher(productHandle: string | null, isOpen: boolean) {
  const fetcher = useFetcher<typeof loader>();
  const shouldFetch = productHandle && fetcher.state === 'idle';

  useEffect(() => {
    if (shouldFetch) {
      fetcher.load(`/products/${productHandle}`);
    }
  }, [productHandle, isOpen]);

  return {
    isLoading: fetcher.state === 'loading',
    product: fetcher.data?.product,
    clearData: () => {
      fetcher.data = undefined;
    }
  };
}
