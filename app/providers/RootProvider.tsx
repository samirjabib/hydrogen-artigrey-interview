import {Aside} from '~/providers/Aside';
import type {RootLayoutProps} from '~/types';
import {MobileMenuAside} from '../components/layout/header/mobile/MobileMenuAside';
import {SearchAside} from '../components/search/SearchAside';
import {CartAside} from '../components/cart/CartAside';
import {Header} from '../components/layout/header/Header';
import {Footer} from '../components/Footer';

export function RootProvider({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
}: RootLayoutProps) {
  return (
    <Aside.Provider>
      <CartAside cart={cart} />
      <MobileMenuAside header={header} publicStoreDomain={publicStoreDomain} />
      <SearchAside />
      {header && (
        <Header
          header={header}
          cart={cart}
          isLoggedIn={isLoggedIn}
          publicStoreDomain={publicStoreDomain}
        />
      )}
      <main>{children}</main>
      <Footer
        footer={footer}
        header={header}
        publicStoreDomain={publicStoreDomain}
      />
    </Aside.Provider>
  );
}
