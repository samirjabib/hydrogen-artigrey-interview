import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface QuickViewState {
    isOpen: boolean;
    productHandle: string | null | undefined;
    selectedSellingPlanId: string | null;
    open: (productHandle: string, sellingPlanId?: string | null) => void;
    close: () => void;
}

export const useQuickViewStore = create<QuickViewState>()(
    devtools(
        (set, get) => ({
            isOpen: false,
            productHandle: null,
            selectedSellingPlanId: null,
            open: (productHandle, sellingPlanId) => {
                set({
                    isOpen: true,
                    productHandle,
                    selectedSellingPlanId: sellingPlanId ?? null
                });
            },
            close: () => {
                set({
                    isOpen: false,
                    productHandle: null,
                    selectedSellingPlanId: null
                });
            },
        }),
        { name: 'QuickViewStore' }
    )
);