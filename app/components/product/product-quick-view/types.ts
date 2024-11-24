import { CollectionProductFragment, ProductQuery } from "storefrontapi.generated";
import { Variant } from "~/components/design-system/product-card/ProductCard";
import { RootLayoutProps } from "~/types";




export type QuantityCellProps = {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  isMinQuantity: boolean;
  isMaxQuantity: boolean;
};


export type VariantWithMetaField = CollectionProductFragment['variants']['nodes'][0] & {
  metafield: {
    key: string;
    value: string;
  };
};


export type ProductVariantTableProps = {
  variants: CollectionProductFragment['variants']['nodes'];
  cart?: RootLayoutProps['cart'];
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
};


export type CartSummaryProps = {
  totalItems: number;
  subtotal: number;
  cart?: RootLayoutProps['cart'];
};

export type ButtonQuickViewProps = {
  buttonLabel: string;
  isProductWithSellingPlanGroups: boolean;
  handle: string;
  variantButton?: Variant
}

export type QuickViewContentProps = {
  product: ProductQuery['product'];
  cart?: RootLayoutProps['cart'];
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
  productHandle: string | null;
  isOpen: boolean;
  timeout?: number;
}

export enum FetchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  TIMEOUT = 'timeout',
  SUCCESS = 'success'
}