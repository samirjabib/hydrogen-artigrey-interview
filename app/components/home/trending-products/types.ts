import { CollectionByHandleQuery } from "storefrontapi.generated";



export type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  isSubscriptionProduct?: boolean;
  badge?: string;
  rating: number;
  tags: string[];
};



export type ProductSliderProps = {
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
};