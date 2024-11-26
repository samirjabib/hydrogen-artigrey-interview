import type { Swiper as SwiperJSType } from 'swiper';


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


export type SwiperType = SwiperJSType | null;
