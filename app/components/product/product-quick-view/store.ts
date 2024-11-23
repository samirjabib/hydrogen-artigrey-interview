// src/store/useQuickViewStore.ts
import { create } from 'zustand';

type QuickViewState = {
    isOpen: boolean;
    productHandle: string | null;
    open: (productHandle: string) => void;
    close: () => void;
};

export const useQuickViewStore = create<QuickViewState>((set) => ({
    isOpen: false,
    productHandle: null,
    open: (productHandle) =>
        set({ isOpen: true, productHandle }),
    close: () =>
        set({ isOpen: false, productHandle: null }),
}));
