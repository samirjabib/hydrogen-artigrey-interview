import { CollectionProductFragment } from "storefrontapi.generated";
import { Variant } from "~/components/design-system/product-card/ProductCard";

export type ProductsQuickViewProps = {
  variant: Variant;
  product: CollectionProductFragment;
};


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


export type ProductVariant = {
  name: string;
  price: string;
  discount: string;
  total: string;
  size: string;
}

export type ProductVariantTableProps = {
  variants: CollectionProductFragment['variants']['nodes'];
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
};