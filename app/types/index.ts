import type { Swiper as SwiperJSType } from 'swiper';


import type {
  CartApiQueryFragment,
  CollectionByHandleQuery,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import { CartReturn } from '@shopify/hydrogen';

export type RootLayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
  enhanceCollection: Promise<CollectionByHandleQuery | null>;
};


export type SwiperType = SwiperJSType | null;
