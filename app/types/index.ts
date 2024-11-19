import type {
  CartApiQueryFragment,
  CollectionByHandleQuery,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';

export type RootLayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
};

// Extraer la colección (elimina el Maybe y la opcionalidad)
type Collection = NonNullable<CollectionByHandleQuery['collectionByHandle']>;

// Extraer los productos de la colección
type Products = Collection['products'];

// Extraer un producto específico (a través de `edges` y `node`)
type ProductEdge = Products['edges'][number];
type ProductNode = ProductEdge['node'];

// Extraer variantes de un producto
type Variants = ProductNode['variants'];
type VariantNode = Variants['nodes'][number];

// Extraer un ajuste de precio dentro de un Selling Plan
type SellingPlanGroups = ProductNode['sellingPlanGroups'];
type SellingPlanNode = SellingPlanGroups['nodes'][number];
type PriceAdjustment = SellingPlanNode['sellingPlans']['nodes'][number]['priceAdjustments'][number];
