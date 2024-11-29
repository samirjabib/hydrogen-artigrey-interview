import { Suspense } from 'react';
import { Await } from '@remix-run/react';
import { Aside } from '~/providers/Aside';
import type { RootLayoutProps } from '~/types';
import { MobileMenuAside } from '../components/layout/header/mobile/MobileMenuAside';
import { CartAside } from '../components/cart/CartAside';
import { Header } from '../components/layout/header/Header';
import { Footer } from '../components/layout/footer/Footer';
import { ProductsQuickView } from '~/components/product/product-quick-view/ProductsQuickView';
import { Toaster } from '~/components/ui/toaster';
import { CartProvider } from './CartProvider';

export function RootProvider({
  cart,
  children,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
  enhanceCollection,
}: RootLayoutProps) {
  return (
    <Aside.Provider>
      <Suspense fallback={null}>
        <Await
          resolve={cart}
          errorElement={<ProductsQuickView cart={null} />}
        >
          {(resolvedCart) => (
            <>
              <ProductsQuickView cart={resolvedCart} />
              <CartAside cart={resolvedCart} enhanceCollection={enhanceCollection} />
            </>
          )}
        </Await>
      </Suspense>

      <MobileMenuAside header={header} publicStoreDomain={publicStoreDomain} />
      <div className="wrapper relative">
        <Header
          header={header}
          cart={cart}
          isLoggedIn={isLoggedIn}
          publicStoreDomain={publicStoreDomain}
        />
      </div>
      <main>{children}</main>
      {footer && (
        <Footer
          footer={footer}
          header={header}
          publicStoreDomain={publicStoreDomain}
        />
      )}
      <Toaster />
    </Aside.Provider>
  );
}