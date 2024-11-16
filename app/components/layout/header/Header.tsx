import type {HeaderProps} from './types';

import {MenuDesktop} from './desktop/MenuDesktop';
import {MenuMobile} from './mobile/MenuMobile';
import {useMediaQuery} from '~/hooks/useMediaQuery';
import {useHeaderVisibility} from './hooks';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {
    menu,
    shop: {name: shopName, primaryDomain},
  } = header;
  const primaryDomainUrl = primaryDomain.url;
  const {matches: isMobile} = useMediaQuery('(max-width: 1064px)');
  const {isHeaderVisible} = useHeaderVisibility(0.3);

  return (
    <header
      className={`px-4 md:px-10 py-3 fixed top-0 z-30 w-full transition-transform duration-300 ${
        isHeaderVisible ? 'transform-none' : '-translate-y-full'
      }`}
    >
      <div>
        {isMobile ? (
          <MenuMobile shopName={shopName} isLoggedIn={isLoggedIn} cart={cart} />
        ) : (
          <MenuDesktop
            menu={menu}
            primaryDomainUrl={primaryDomainUrl}
            cart={cart}
            isLoggedIn={isLoggedIn}
            shopName={shopName}
            publicStoreDomain={publicStoreDomain}
          />
        )}
      </div>
    </header>
  );
}
