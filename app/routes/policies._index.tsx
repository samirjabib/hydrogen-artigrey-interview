import { json, type LoaderFunctionArgs } from '@netlify/remix-runtime';
import { useLoaderData, Link } from '@remix-run/react';
import { ErrorBoundary } from '~/components/error/ErrorBoundary';

export async function loader({ context }: LoaderFunctionArgs) {
  const data = await context.storefront.query(POLICIES_QUERY);
  const policies = Object.values(data.shop || {});

  if (!policies.length) {
    throw new Response('No policies found', { status: 404 });
  }

  return json({ policies });
}

export default function Policies() {
  const { policies } = useLoaderData<typeof loader>();

  return (
    <div className="policies">
      <h1>Policies</h1>
      <ErrorBoundary />
    </div>
  );
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
` as const;
