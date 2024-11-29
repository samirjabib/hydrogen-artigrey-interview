import {
  useNonce,
  getShopAnalytics,
  Analytics,
  getSeoMeta,
  type SeoConfig,
  getSelectedProductOptions,
} from '@shopify/hydrogen';
import { defer, HeadersFunction, type LoaderFunctionArgs } from '@netlify/remix-runtime';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  useRouteLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
  type ShouldRevalidateFunction,
  Link,
} from '@remix-run/react';
import { FOOTER_QUERY, HEADER_QUERY } from '~/queries/fragments/fragments';
import './styles/tailwind.css';

import { RootProvider } from './components';
import { COLLECTION_BY_HANDLE_QUERY } from './queries/fragments/collection';
import { Button } from './components/ui/Button';

export type RootLoader = typeof loader;


export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
  defaultShouldRevalidate,
}) => {
  const revalidateOnMutation = formMethod && formMethod !== 'GET';
  const revalidateOnNavigation = currentUrl.toString() !== nextUrl.toString();

  const result = (
    revalidateOnMutation ||
    revalidateOnNavigation
  );

  return result || defaultShouldRevalidate;
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Vary": "Accept",
    ...loaderHeaders,
  };
};


export function links() {
  return [
    { rel: 'stylesheet', href: '/styles/tailwind.css' },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
  ];
}

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  const { storefront, env, cart } = args.context;

  const resolvedCart = await cart.get();


  return defer({
    ...deferredData,
    ...criticalData,

    resolvedCart,
    publicStoreDomain: env.PUBLIC_STORE_DOMAIN,
    shop: getShopAnalytics({
      storefront,
      publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
    }),
    consent: {
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
      storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    },
  });
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({ context }: LoaderFunctionArgs) {
  const { storefront } = context;

  const [header] = await Promise.all([
    storefront.query(HEADER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        headerMenuHandle: 'main-menu', // Adjust to your header menu handle
      },
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    header,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({ context, request }: LoaderFunctionArgs) {
  const { storefront, customerAccount } = context;

  const footer = storefront
    .query(FOOTER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        footerMenuHandle: 'footer', // Adjust to your footer menu handle
      },
    })
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });


  const enhanceCollection = storefront
    .query(COLLECTION_BY_HANDLE_QUERY, {
      cache: storefront.CacheShort(),
      variables: {
        handle: 'enhance-your-performance',
      },
    })
    .catch((error) => {
      console.error(error);
      return null;
    });


  return {
    isLoggedIn: customerAccount.isLoggedIn(),
    footer,
    enhanceCollection,
  };
}

export function Layout({ children }: { children?: React.ReactNode }) {
  const nonce = useNonce();
  const data = useRouteLoaderData<RootLoader>('root');
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {data ? (
          <Analytics.Provider
            cart={data.resolvedCart}
            shop={data.shop}
            consent={data.consent}
          >
            <RootProvider {...data} cart={data.resolvedCart}>{children}</RootProvider>
          </Analytics.Provider>
        ) : (
          children
        )}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-4">This page hasn't been created yet.</p>
      <p className="text-lg mb-8">Please continue exploring our test site!</p>
      <Button >
        <Link to="/">
          Back to Home
        </Link>
      </Button>
    </main>
  );
}

