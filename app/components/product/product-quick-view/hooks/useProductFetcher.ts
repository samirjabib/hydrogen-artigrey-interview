import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { loader } from "~/routes/products.$handle";
import { UseProductFetcherOptions } from "../types";

export function useProductFetcher({
  productHandle,
  isOpen,
}: UseProductFetcherOptions) {
  const fetcher = useFetcher<typeof loader>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!productHandle || !isOpen) return;
    setIsLoading(true);
    fetcher.load(`/products/${productHandle}`)
    setIsLoading(false);


  }, [productHandle, isOpen]);

  return {
    isLoading,
    product: fetcher.data?.product,
    clearData: () => {
      fetcher.data = undefined;
      setIsLoading(false);
    }
  };
}