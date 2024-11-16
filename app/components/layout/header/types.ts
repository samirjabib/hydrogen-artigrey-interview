import type {CartApiQueryFragment, HeaderQuery} from 'storefrontapi.generated';
import {MenuItems} from './shared/MenuItems';

type Viewport = 'desktop' | 'mobile';

export type HeaderProps = {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
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
  cart: Promise<CartApiQueryFragment | null>;
  shopName: string;
  isLoggedIn: Promise<boolean>;
};

export type MenuItemsProps = {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: HeaderProps['publicStoreDomain'];
};

export type MenuMobileProps = {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: HeaderProps['publicStoreDomain'];
  cart: Promise<CartApiQueryFragment | null>;
  shopName: string;
  isLoggedIn: Promise<boolean>;
};

export type HeaderActionsProps = {
  isLoggedIn: Promise<boolean>;
  cart: Promise<CartApiQueryFragment | null>;
};
