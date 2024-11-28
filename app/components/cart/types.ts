import { OptimisticCartLine } from '@shopify/hydrogen';
import { Product } from '@shopify/hydrogen/storefront-api-types';
import { CartApiQueryFragment } from 'storefrontapi.generated';
import type { HeaderProps } from '~/components/layout/header/types';
import { CartLayout } from './components/CartMain';
import { OptimisticCart } from '@shopify/hydrogen';

export type CartToggleProps = Pick<HeaderProps, 'cart'>;


export type ExtendedProduct = Pick<Product, "handle" | "title" | "id" | "vendor"> & {
    sellingPlanGroups?: {
        edges: Array<{
            node: {
                sellingPlans?: {
                    nodes: Array<{ id: string; name: string }>;
                };
            };
        }>;
    };
};

export type CartLineProps = OptimisticCartLine<CartApiQueryFragment>;

export type SubscriptionButtonProps = {
    isLoading: boolean;
    hasSubscription: boolean;
};




export type SubscriptionToggleProps = {
    line: CartLineProps,
    sellingPlan: any
};



export type CartLineProductInfoProps = {
    line: CartLineProps;
    layout: CartLayout;
};


export type CartSummaryProps = {
    cart: OptimisticCart<CartApiQueryFragment | null>;
    layout: CartLayout;
};