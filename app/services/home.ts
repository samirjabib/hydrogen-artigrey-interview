import type {LoaderFunctionArgs} from '@netlify/remix-runtime';
import type {
  BrandsCardsQuery,
  GoalsCardsQuery,
  FeaturedCollectionQuery,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import {
  BRANDS_QUERY,
  GOALS_CARDS_QUERY,
  FEATURED_COLLECTION_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/graphql/home';

// Define un tipo para el retorno de getCriticalData
type CriticalData = {
  featuredCollection: FeaturedCollectionQuery['collections']['nodes'][0];
  goals: GoalsCardsQuery['metaobjects']['edges'];
  brands: BrandsCardsQuery['metaobjects']['edges'];
};

// Define un tipo para el retorno de getDeferredData
type DeferredData = {
  recommendedProducts: Promise<RecommendedProductsQuery | null>;
};

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
export async function getCriticalData({
  context,
}: LoaderFunctionArgs): Promise<CriticalData> {
  const [{collections}, goalsData, brandsData] = await Promise.all([
    context.storefront.query<FeaturedCollectionQuery>(
      FEATURED_COLLECTION_QUERY,
    ),
    context.storefront.query<GoalsCardsQuery>(GOALS_CARDS_QUERY),
    context.storefront.query<BrandsCardsQuery>(BRANDS_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
    goals: goalsData.metaobjects.edges,
    brands: brandsData.metaobjects.edges,
  };
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
export async function getDeferredData({
  context,
}: LoaderFunctionArgs): Promise<DeferredData> {
  const recommendedProducts = context.storefront
    .query<RecommendedProductsQuery>(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}
