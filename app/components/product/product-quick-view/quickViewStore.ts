// store/quickViewStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface QuickViewState {
    isOpen: boolean;
    productHandle: string | null;
    open: (productHandle: string) => void;
    close: () => void;
}

export const useQuickViewStore = create<QuickViewState>()(
    devtools(
        (set) => ({
            isOpen: false,
            productHandle: null,
            open: (productHandle) => set({ isOpen: true, productHandle }),
            close: () => set({ isOpen: false, productHandle: null }),
        }),
        { name: 'QuickViewStore' }
    )
);