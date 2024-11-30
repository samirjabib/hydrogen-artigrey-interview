import type { HeaderProps } from './types';
import { MenuDesktop } from './desktop/MenuDesktop';
import { MenuMobile } from './mobile/MenuMobile';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { useHeaderVisibility } from './hooks';
import { useEffect, useState } from 'react';
import { useRevalidator } from '@remix-run/react';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {
    menu,
    shop: { name: shopName, primaryDomain },
  } = header;
  const primaryDomainUrl = primaryDomain.url;
  const { matches: isMobile } = useMediaQuery('(max-width: 1100px)');
  const { isHeaderVisible } = useHeaderVisibility(0.2);
  const [isClient, setIsClient] = useState(false);
  const { revalidate } = useRevalidator();


  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    revalidate();
  }, []);


  return (
    <header
      role="banner"
      aria-label="Header"
      className={`px-4 md:px-10 py-3 fixed wrapper top-0 z-30 w-full transition-transform duration-300 ${isHeaderVisible ? 'transform-none' : '-translate-y-full'
        }`}
    >
      <nav role="navigation" aria-label="Main menu">
        <div className={!isClient ? 'invisible' : ''}>
          {isMobile ? (
            <MenuMobile
              shopName={shopName}
              isLoggedIn={isLoggedIn}
              cart={cart}
              aria-label="Mobile menu"
            />
          ) : (
            <MenuDesktop
              menu={menu}
              primaryDomainUrl={primaryDomainUrl}
              cart={cart}
              isLoggedIn={isLoggedIn}
              shopName={shopName}
              publicStoreDomain={publicStoreDomain}
              aria-label="Desktop menu"
            />
          )}
        </div>
      </nav>
    </header>
  );
}