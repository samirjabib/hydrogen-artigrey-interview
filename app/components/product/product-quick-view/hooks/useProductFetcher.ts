import { useFetcher } from "@remix-run/react";
import { useEffect, useMemo, useCallback, useState } from "react";
import { loader } from "~/routes/products.$handle";
import { FetchStatus, UseProductFetcherOptions } from "../types";



class FetchTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchTimeoutError';
  }
}



/**
 * A hook that fetches a product by its handle and manages the state of the
 * fetch process. It also provides a retry mechanism and a way to clear the
 * fetched data.
 *
 * Cases of use:
 * - When you need to fetch a product inside a component and handle the
 * loading state, errors, and retries.
 * - When you need to fetch a product and clear the data when the component
 * is unmounted or when the user navigates away.
 * - When you need to fetch a product and control the fetch process with a
 * timeout.
 *
 * @param {Object} options
 * @param {string} options.productHandle - The handle of the product to fetch.
 * @param {boolean} options.isOpen - A boolean that indicates whether the
 * component is open or not. If it's false, the hook won't fetch the product.
 * @param {number} options.timeout - The timeout in milliseconds for the fetch
 * process. If it's not provided, it will default to 10 seconds.
 *
 * @returns {Object}
 * @returns {boolean} isLoading - A boolean that indicates whether the product
 * is being fetched or not.
 * @returns {Product} product - The fetched product.
 * @returns {string|null} error - The error message if there was an error
 * fetching the product.
 * @returns {FetchStatus} status - The status of the fetch process.
 * @returns {function} clearData - A function that clears the fetched data and
 * resets the states.
 * @returns {function} retry - A function that retries the fetch process.
 */


export function useProductFetcher({
  productHandle,
  isOpen,
  timeout = 10000
}: UseProductFetcherOptions) {
  const fetcher = useFetcher<typeof loader>();

  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Memoized fetch trigger with strict conditions
  const shouldFetch = useMemo(() => {
    return (
      !!productHandle &&
      fetcher.state === 'idle' &&
      isOpen &&
      !fetcher.data
    );
  }, [productHandle, fetcher.state, isOpen, fetcher.data]);

  // Stable fetch function with timeout and error handling
  const fetchProduct = useCallback(() => {
    if (!shouldFetch || !productHandle) return;

    // Reset previous states
    setFetchStatus(FetchStatus.LOADING);
    setFetchError(null);

    // Create timeout promise
    const timeoutPromise = new Promise<void>((_, reject) => {
      setTimeout(() => {
        reject(new FetchTimeoutError('Product fetch timed out'));
      }, timeout);
    });

    // Fetch product with timeout
    Promise.race([
      fetcher.load(`/products/${productHandle}`),
      timeoutPromise
    ])
      .then(() => {
        setFetchStatus(FetchStatus.SUCCESS);
      })
      .catch((error) => {
        // Detailed error handling
        let errorMessage = 'An unexpected error occurred';

        if (error instanceof FetchTimeoutError) {
          errorMessage = 'Product loading timed out. Please try again.';
          setFetchStatus(FetchStatus.TIMEOUT);
        } else if (error instanceof Error) {
          errorMessage = error.message;
          setFetchStatus(FetchStatus.ERROR);
        }

        setFetchError(errorMessage);

        console.error('Product fetch error:', error);
      });
  }, [shouldFetch, productHandle, fetcher.load, timeout]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    isLoading: fetchStatus === FetchStatus.LOADING,

    product: fetcher.data?.product,
    error: fetchError,

    status: fetchStatus,

    clearData: () => {
      // Safely clear fetcher data and reset states
      fetcher.data = undefined;
      setFetchStatus(FetchStatus.IDLE);
      setFetchError(null);
    },

    // Retry mechanism with controlled re-fetch
    retry: () => {
      // Reset data before re-fetching
      fetcher.data = undefined;
      fetchProduct();
    }
  };
}
