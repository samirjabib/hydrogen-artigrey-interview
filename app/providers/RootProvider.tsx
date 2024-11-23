import { Aside } from '~/providers/Aside';
import type { RootLayoutProps } from '~/types';
import { MobileMenuAside } from '../components/layout/header/mobile/MobileMenuAside';
import { SearchAside } from '../components/search/SearchAside';
import { CartAside } from '../components/cart/CartAside';
import { Header } from '../components/layout/header/Header';
import { Footer } from '../components/layout/footer/Footer';
import { ProductsQuickView } from '~/components/product/product-quick-view/ProductsQuickView';

export function RootProvider({
  cart,
  children,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
}: RootLayoutProps) {



  return (
    <Aside.Provider>
      <ProductsQuickView cart={cart} />
      <CartAside cart={cart} />
      <MobileMenuAside header={header} publicStoreDomain={publicStoreDomain} />
      <SearchAside />
      {header && (
        <div className="wrapper relative">
          <Header
            header={header}
            cart={cart}
            isLoggedIn={isLoggedIn}
            publicStoreDomain={publicStoreDomain}
          />
        </div>
      )}
      <main>{children}</main>
      {footer && (
        <Footer
          footer={footer}
          header={header}
          publicStoreDomain={publicStoreDomain}
        />
      )}
    </Aside.Provider>
  );
}
