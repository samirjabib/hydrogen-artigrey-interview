import { useFetcher } from "@remix-run/react";
import { useEffect, useRef, useMemo } from "react";
import { loader } from "~/routes/products.$handle";
import { UseProductFetcherOptions } from "../types";

export function useProductFetcher({
  productHandle,
  isOpen,
}: UseProductFetcherOptions) {
  const fetcherKey = useMemo(() => `product-fetcher-${productHandle}`, [productHandle]);
  const fetcher = useFetcher<typeof loader>({
    key: fetcherKey,
  });
  const loadingRef = useRef(false);

  useEffect(() => {
    if (!productHandle || !isOpen) {
      loadingRef.current = false;
      return;
    }

    if (!loadingRef.current && !fetcher.data) {
      loadingRef.current = true;
      fetcher.load(`/products/${productHandle}`);
    }
  }, [productHandle, isOpen, fetcherKey]);

  return {
    state: fetcher.state,
    product: fetcher.data?.product,
  };
}