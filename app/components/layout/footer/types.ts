import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

export interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url?: string;
  items?: MenuItem[];
  resourceId?: string;
  tags?: string[];
  type?: string;
}

export interface FooterMenuProps {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}

export interface FooterLinkProps {
  url: string;
  title: string;
  isExternal: boolean;
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  processUrl: (url: string) => string;
}
