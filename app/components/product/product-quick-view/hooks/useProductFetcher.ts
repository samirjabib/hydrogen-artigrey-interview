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
  const hasDataRef = useRef(false);

  useEffect(() => {
    // Only fetch if the modal is open and we don't have data yet
    if (isOpen && !hasDataRef.current && !fetcher.data) {
      fetcher.load(`/products/${productHandle}`);
      hasDataRef.current = true;
    }

    // Reset when modal is closed
    if (!isOpen) {
      hasDataRef.current = false;
    }
  }, [productHandle, isOpen, fetcher.load]);

  return {
    state: fetcher.data ? 'idle' : fetcher.state,
    product: fetcher.data?.product,
  };
}