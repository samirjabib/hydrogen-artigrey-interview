import type {LoaderFunctionArgs} from '@netlify/remix-runtime';
import type {
  BrandsCardsQuery,
  GoalsCardsQuery,
  FeaturedCollectionQuery,
  RecommendedProductsQuery,
  CleanSuplementsQuery,
  CollectionByHandleQuery,
  VideosSwiperQuery,
} from 'storefrontapi.generated';
import type {BlogsQuery} from '~/queries/blogs';
import {GET_BLOGS_QUERY} from '~/queries/blogs';
import {COLLECTION_BY_HANDLE_QUERY} from '~/queries/fragments/collection';
import {PRODUCT_QUERY, VARIANTS_QUERY} from '~/queries/fragments/product';
import {
  BRANDS_QUERY,
  GOALS_CARDS_QUERY,
  FEATURED_COLLECTION_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
  CLEAN_SUPPLEMENTS_QUERY,
  VIDEOS_SWIPER_QUERY,
} from '~/queries/home';
import {defer} from '@remix-run/node';
import {getSelectedProductOptions} from '@shopify/hydrogen';

type CriticalData = {
  featuredCollection: FeaturedCollectionQuery['collections']['nodes'][0];
  goals: GoalsCardsQuery['metaobjects']['edges'];
  brands: BrandsCardsQuery['metaobjects']['edges'];
  cleanSupplements: CleanSuplementsQuery['metaobjects']['edges'];
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
  bundleCollection: CollectionByHandleQuery['collectionByHandle'];
  videoSwiper: VideosSwiperQuery['metaobjects'];
};

type DeferredData = {} | null;

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
export async function getCriticalData({
  context,
}: LoaderFunctionArgs): Promise<CriticalData> {
  const [
    {collections},
    goalsData,
    brandsData,
    cleanSupplementsData,
    blogsData,
    trendingProductsData,
    bundleCollectionData,
    videoSwiperData,
  ] = await Promise.all([
    context.storefront.query<FeaturedCollectionQuery>(
      FEATURED_COLLECTION_QUERY,
    ),
    context.storefront.query<GoalsCardsQuery>(GOALS_CARDS_QUERY),
    context.storefront.query<BrandsCardsQuery>(BRANDS_QUERY),
    context.storefront.query<CleanSuplementsQuery>(CLEAN_SUPPLEMENTS_QUERY),
    context.storefront.query<BlogsQuery>(GET_BLOGS_QUERY),
    context.storefront.query<CollectionByHandleQuery>(
      COLLECTION_BY_HANDLE_QUERY,
      {
        variables: {
          handle: 'trending-products',
        },
        //NOTE: this is the hydrogen way to handle the requests
        cache: context.storefront.CacheLong(),
      },
    ),
    context.storefront.query<CollectionByHandleQuery>(
      COLLECTION_BY_HANDLE_QUERY,
      {
        variables: {
          handle: 'sleep',
        },
      },
    ),
    context.storefront.query<VideosSwiperQuery>(VIDEOS_SWIPER_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
    goals: goalsData.metaobjects.edges,
    brands: brandsData.metaobjects.edges,
    cleanSupplements: cleanSupplementsData.metaobjects.edges,
    blogs: blogsData.blogs.edges[0].node.articles.edges,
    trendingProducts: trendingProductsData.collectionByHandle,
    bundleCollection: bundleCollectionData.collectionByHandle,
    videoSwiper: videoSwiperData.metaobjects,
  };
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */ export async function getDeferredData({
  context,
  request,
}: LoaderFunctionArgs): Promise<DeferredData> {
  const url = new URL(request.url);

  const productHandle = url.searchParams.get('product');
  if (!productHandle) return null;

  return defer({});
}
