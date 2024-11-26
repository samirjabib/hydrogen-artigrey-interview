
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface QuickViewState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useCartStore = create<QuickViewState>()(
    devtools(
        (set) => ({
            isOpen: false,
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
        }),
        { name: 'QuickViewStore' }
    )
);