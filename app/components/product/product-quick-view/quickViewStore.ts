/**
 * This store is used to manage the state of the quick view modal. It stores whether the modal is open or not and which product handle is being viewed.
 *
 * The state is an object with the following properties:
 * - isOpen: a boolean indicating whether the modal is open or not
 * - productHandle: the handle of the product being viewed in the modal
 *
 * The store also has three actions:
 * - open: a function that takes a product handle as an argument and sets the state to open with that product handle
 * - close: a function that sets the state to closed
 */
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