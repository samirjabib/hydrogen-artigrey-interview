import { useFetcher } from "@remix-run/react";
import { useEffect, useMemo, useCallback, useState } from "react";
import { loader } from "~/routes/products.$handle";

// Enum for more descriptive fetch states
enum FetchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  TIMEOUT = 'timeout',
  SUCCESS = 'success'
}

// Custom error types for more specific error handling
class FetchTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchTimeoutError';
  }
}

interface UseProductFetcherOptions {
  productHandle: string | null;
  isOpen: boolean;
  timeout?: number; // Optional timeout in milliseconds
}

export function useProductFetcher({
  productHandle,
  isOpen,
  timeout = 10000 // Default 10 seconds timeout
}: UseProductFetcherOptions) {
  const fetcher = useFetcher<typeof loader>();

  // Enhanced state management
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

        // Optional: Log error for monitoring
        console.error('Product fetch error:', error);
      });
  }, [shouldFetch, productHandle, fetcher.load, timeout]);

  // Effect for loading product with controlled dependencies
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Comprehensive return object
  return {
    // Enhanced loading state
    isLoading: fetchStatus === FetchStatus.LOADING,

    // Product data with error handling
    product: fetcher.data?.product,
    error: fetchError,

    // Detailed fetch status
    status: fetchStatus,

    // State management methods
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
