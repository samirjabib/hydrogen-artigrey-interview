import { Suspense } from 'react';
import { defer, redirect, type LoaderFunctionArgs } from '@netlify/remix-runtime';
import { Await, useLoaderData, type MetaFunction } from '@remix-run/react';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
} from '@shopify/hydrogen';
import { ProductForm } from '~/components/product/ProductForm';
import { ProductPrice } from '~/components/product/ProductPrice';
import { ProductImage } from '~/components/product/ProductImage';
import { PRODUCT_QUERY, VARIANTS_QUERY } from '~/queries/fragments/product';
import { ProductQuery } from 'storefrontapi.generated';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `Hydrogen | ${data?.product.title ?? ''}` }];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({
  context,
  params,
  request,
}: LoaderFunctionArgs) {
  const { handle } = params;
  const { storefront } = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }
  const [{ product }] = await Promise.all([
    storefront.query<ProductQuery>(PRODUCT_QUERY, {
      variables: { handle, selectedOptions: getSelectedProductOptions(request) },
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  if (!product?.id) {
    throw new Response(null, { status: 404 });
  }

  /* NOTE samir : I commented out these functions because I reuse them to create a quick view, and the exercise doesn't have a product details page. If the case requires something different, we can create another loader in a different route and handle the logic there.
   */

  /*   const firstVariant = product.variants.nodes[0];
    const firstVariantIsDefault = Boolean(
      firstVariant.selectedOptions.find(
        (option: SelectedOption) =>
          option.name === 'Title' && option.value === 'Default Title',
      ),
    ); */
  /* 
    if (firstVariantIsDefault) {
      product.selectedVariant = firstVariant;
    } *//*  else {
// if no selected variant was returned from the selected options,
// we redirect to the first variant's url with it's selected options applied
if (!product.selectedVariant) {
throw redirectToFirstVariant({ product, request });
}
} */

  return {
    product,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({ context, params, request }: LoaderFunctionArgs) {
  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.

  const variants = context.storefront
    .query(VARIANTS_QUERY, {
      variables: { handle: params.handle! },
    })
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    variants,
  };
}


/* NOTE UP */
/* 
function redirectToFirstVariant({
  product,
  request,
}: {
  product: ProductFragment;
  request: Request;
}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  );
} */

export default function Product() {
  const { product, variants } = useLoaderData<typeof loader>();
  const selectedVariant = useOptimisticVariant(
    product.selectedVariant,
    variants,
  );

  const { title, descriptionHtml } = product;

  return (
    <div className="product">
      <ProductImage image={selectedVariant?.image} />
      <div className="product-main">
        <h1>{title}</h1>
        <ProductPrice
          price={selectedVariant?.price}
          compareAtPrice={selectedVariant?.compareAtPrice}
        />
        <br />
        <Suspense
          fallback={
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={[]}
            />
          }
        >
          <Await
            errorElement="There was a problem loading product variants"
            resolve={variants}
          >
            {(data) => (
              <ProductForm
                product={product}
                selectedVariant={selectedVariant}
                variants={data?.product?.variants.nodes || []}
              />
            )}
          </Await>
        </Suspense>
        <br />
        <br />
        <p>
          <strong>Description</strong>
        </p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <br />
      </div>
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}

