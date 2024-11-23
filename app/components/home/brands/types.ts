import { BrandsCardsQuery } from "storefrontapi.generated";

export type BrandProps = {
    brands: BrandsCardsQuery['metaobjects']['edges'];
};