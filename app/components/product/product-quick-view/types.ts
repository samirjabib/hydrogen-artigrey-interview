import { CartApiQueryFragment, CollectionProductFragment, ProductQuery } from "storefrontapi.generated";
import { CartLine } from "~/components/cart/components/cart-line/CartLineItem";
import { Variant } from "~/components/design-system/product-card/ProductCard";
import { ExtendedProduct } from "~/types/product";




export type QuantityCellProps = {
  variant: VariantWithMetaField
  cartLine?: CartLine
};


export type VariantWithMetaField = CollectionProductFragment['variants']['nodes'][0] & {
  metafield: {
    key: string;
    value: string;
  };
};


export type ProductVariantTableProps = {
  variants: CollectionProductFragment['variants']['nodes'];
  cart: CartApiQueryFragment | null;
}

export type ProductHeaderProps = {
  title: string;
  subtitle?: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export type TableRowProps = {
  variant: VariantWithMetaField;
  cart: CartApiQueryFragment | null;
};


export type CartSummaryProps = {
  totalItems: number;
  subtotal: string;
  cart: CartApiQueryFragment | null;
};

export type ButtonQuickViewProps = {
  buttonLabel: string;
  isProductWithSellingPlanGroups: boolean;
  product?: ExtendedProduct
  variantButton?: Variant
  selectedSellingPlanId?: string
}

export type QuickViewContentProps = {
  product: ProductQuery['product']
  cart: CartApiQueryFragment | null;
}

export type HeaderItem = {
  id: number;
  name: string;
}

export type DiscountRow = {
  quantity: string;
  discount: string;
};

export type UseProductFetcherOptions = {
  productHandle: string | null | undefined;
  isOpen: boolean;
}

export enum FetchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  TIMEOUT = 'timeout',
  SUCCESS = 'success'
}


export type AddToCartSectionProps = {
  price: number;
  product: ProductQuery['product'];
  selectedVariantId?: string;
  onQuantityChange?: (quantity: number) => void;
  cart: CartApiQueryFragment | null;
}


export type PriceDisplayProps = {
  price?: string;
}

export type CartQuantityControlsProps = {
  cartLine?: CartLine
  quantity: number;
  merchandiseId: string;
};


export type SubscriptionPlanOptionsProps = {
  product: ProductQuery['product'];
}