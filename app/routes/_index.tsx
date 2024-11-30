import { defer, MetaArgs, type LoaderFunctionArgs } from '@netlify/remix-runtime';
import { useLoaderData, type MetaFunction } from '@remix-run/react';

import type {
  BrandsCardsQuery,
  CleanSuplementsQuery,
  CollectionByHandleQuery,
  FeaturedCollectionQuery,
  GoalsCardsQuery,
  VideosSwiperQuery,
} from 'storefrontapi.generated';
import {
  Banner,
  Brands,
  Bundles,
  CleanSuplements,
  CustomizedProtein,
  Goals,
  InstagramFeed,
  Promises,
  SecondBanner,
  TrendingProducts,
  VideoSwiper,
} from '~/components';
import { BlogsBanner } from '~/components/home/blogs-banner/components/Blogs-Banner';
import { navItems } from '~/components/home/bundles/constants';

import { mockImages } from '~/components/home/instagram-feed/constants';

import type { BlogsQuery } from '~/queries/blogs';
import { getCriticalData, getDeferredData } from '~/services/home';


import { type HeadersFunction } from "@netlify/remix-runtime";
import { getSeoMeta } from '@shopify/hydrogen';

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate",
  "CDN-Cache-Control": "public, max-age=3600",
  "Netlify-Vary": "query=_data",
});

type LoaderData = {
  goals: GoalsCardsQuery['metaobjects']['edges'];
  brands: BrandsCardsQuery['metaobjects']['edges'];
  collections: FeaturedCollectionQuery;
  cleanSupplements: CleanSuplementsQuery['metaobjects']['edges'];
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
  trendingProducts: CollectionByHandleQuery['collectionByHandle'];
  bundleCollection: CollectionByHandleQuery['collectionByHandle'];
  videoSwiper: VideosSwiperQuery['metaobjects'];
};

export async function loader(args: LoaderFunctionArgs) {
  // no use defer option for now, because it doesn't work well with netlify
  // and it's not necessary, since the data is not too big and it's already
  // pretty fast without blocking
  const deferredData = getDeferredData(args);

  const criticalData = await getCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

export const meta = ({ matches }: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Homepage() {
  const data = useLoaderData<typeof loader>() as LoaderData;

  return (
    <div className="home">
      <Banner />
      <Promises />
      <Brands brands={data?.brands} />
      <Goals goals={data?.goals} />
      <TrendingProducts trendingProducts={data?.trendingProducts} />
      <CleanSuplements cleanSupplements={data?.cleanSupplements} />
      <VideoSwiper videoSwiper={data.videoSwiper} />
      <Bundles initialBundle={data?.bundleCollection} navItems={navItems} />
      <CustomizedProtein />
      <SecondBanner />
      <BlogsBanner blogs={data?.blogs} />
      <InstagramFeed images={mockImages} username="uncmfrt.com" />
    </div>
  );
}
