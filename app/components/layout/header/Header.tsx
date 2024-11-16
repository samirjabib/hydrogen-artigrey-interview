import type {HeaderProps} from './types';

import {HeaderDesktop} from './HeaderDesktop';
import {HeaderMobile} from './HeaderMobile';
import {useMediaQuery} from '~/hooks/useMediaQuery';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {menu, shop} = header;
  const primaryDomainUrl = header.shop.primaryDomain.url;
  const {matches: isMobile} = useMediaQuery('(max-width: 768px)');

  const getHeaderMenu = () => {
    if (isMobile) {
      return (
        <HeaderMobile
          menu={menu}
          primaryDomainUrl={primaryDomainUrl}
          publicStoreDomain={publicStoreDomain}
        />
      );
    }

    return (
      <HeaderDesktop
        menu={menu}
        primaryDomainUrl={primaryDomainUrl}
        cart={cart}
        isLoggedIn={isLoggedIn}
        shopName={shop.name}
        publicStoreDomain={publicStoreDomain}
      />
    );
  };

  return (
    <header className="absolute top-0 z-30 w-full px-10 py-5">
      {getHeaderMenu()}
    </header>
  );
}
