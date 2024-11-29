import { createContext, useContext, useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import type { Cart } from "@shopify/hydrogen-react/storefront-api-types";

const CartContext = createContext<Cart | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const fetcher = useFetcher();

    // This will only run in the browser, not during SSR
    useEffect(() => {
        // Don't load if already loaded or currently loading
        if (fetcher.data || fetcher.state === "loading") return;

        fetcher.load("/cart");
    }, [fetcher]);

    return <CartContext.Provider value={fetcher.data as Cart}>{children}</CartContext.Provider>;
}

export function useCart() {
    return useContext(CartContext);
}