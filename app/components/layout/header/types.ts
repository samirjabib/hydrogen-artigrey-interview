import type { CartApiQueryFragment, HeaderQuery } from 'storefrontapi.generated';
import { MenuItems } from './shared/MenuItems';
import { CartReturn } from '@shopify/hydrogen';
import { Root } from 'postcss';
import { RootLayoutProps } from '~/types';

type Viewport = 'desktop' | 'mobile';

export type HeaderProps = {
  header: HeaderQuery;
  cart: CartReturn | null;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
};

export type HeaderMenuProps = {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
  cart: Promise<CartApiQueryFragment | null>;
  shopName: string;
};

export type MenuDesktopProps = {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: HeaderProps['publicStoreDomain'];
  cart: RootLayoutProps['cart'];
  shopName: string;
  isLoggedIn: Promise<boolean>;
};

export type MenuItemsProps = {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: HeaderProps['publicStoreDomain'];
};

export type MenuMobileProps = {
  cart: RootLayoutProps['cart'];
  shopName: string;
  isLoggedIn: Promise<boolean>;
};

export type HeaderActionsProps = {
  isLoggedIn: Promise<boolean>;
  cart: RootLayoutProps['cart'];
  isMobile?: boolean;
};
