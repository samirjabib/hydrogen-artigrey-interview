import { defer, type LoaderFunctionArgs } from '@netlify/remix-runtime';
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

import { mockImages } from '~/components/home/instagram-feed/constants';

import type { BlogsQuery } from '~/queries/blogs';
import { getCriticalData, getDeferredData } from '~/services/home';

export const meta: MetaFunction = () => {
  return [
    { title: 'Uncomfort | Premium Supplements & Wellness Products' },
    {
      name: 'description',
      content:
        'Discover premium supplements and wellness products at Uncomfort. Clean ingredients, scientifically backed formulas for optimal health and performance.',
    },
    {
      name: 'keywords',
      content:
        'supplements, wellness, clean supplements, health products, performance nutrition',
    },
    {
      property: 'og:title',
      content: 'Uncomfort | Premium Supplements & Wellness Products',
    },
    {
      property: 'og:description',
      content:
        'Premium supplements and wellness products with clean ingredients',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
};

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
  const deferredData = getDeferredData(args);
  const criticalData = await getCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

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
      <Bundles initialBundle={data?.bundleCollection} />
      <CustomizedProtein />
      <SecondBanner />
      <BlogsBanner blogs={data?.blogs} />
      <InstagramFeed images={mockImages} username="uncmfrt.com" />
    </div>
  );
}
