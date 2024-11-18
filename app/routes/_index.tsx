import {defer, type LoaderFunctionArgs} from '@netlify/remix-runtime';
import {useLoaderData, type MetaFunction} from '@remix-run/react';

import type {
  BrandsCardsQuery,
  CleanSuplementsQuery,
  FeaturedCollectionQuery,
  GoalsCardsQuery,
} from 'storefrontapi.generated';

import {
  Banner,
  BlogsBanner,
  Brands,
  CleanSuplements,
  Goals,
  Promises,
} from '~/components';
import {mockImages} from '~/components/home/instagram-feed/constants';
import {InstagramFeed} from '~/components/home/instagram-feed/InstagramFeed';
import {SecondBanner} from '~/components/home/second-banner/SecondBanner';
import type {BlogsQuery} from '~/queries/blogs';
import {getCriticalData, getDeferredData} from '~/services/home';

export const meta: MetaFunction = () => {
  return [
    {title: 'Uncomfort | Premium Supplements & Wellness Products'},
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
    {property: 'og:type', content: 'website'},
    {name: 'twitter:card', content: 'summary_large_image'},
  ];
};

type LoaderData = {
  goals: GoalsCardsQuery['metaobjects']['edges'];
  brands: BrandsCardsQuery['metaobjects']['edges'];
  collections: FeaturedCollectionQuery;
  cleanSupplements: CleanSuplementsQuery['metaobjects']['edges'];
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = getDeferredData(args);
  const criticalData = await getCriticalData(args);
  return defer({...deferredData, ...criticalData});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>() as LoaderData;
  return (
    <div className="home">
      <Banner />
      <Promises />
      <Brands brands={data?.brands} />
      <Goals goals={data?.goals} />
      <CleanSuplements cleanSupplements={data?.cleanSupplements} />
      <SecondBanner />
      <BlogsBanner blogs={data?.blogs} />
      <InstagramFeed images={mockImages} username="uncmfrt.com" />
    </div>
  );
}

// function FeaturedCollection({
//   collection,
// }: {
//   collection: FeaturedCollectionFragment;
// }) {
//   if (!collection) return null;
//   const image = collection?.image;
//   return (
//     <Link
//       className="featured-collection"
//       to={`/collections/${collection.handle}`}
//     >
//       {image && (
//         <div className="featured-collection-image">
//           <Image data={image} sizes="100vw" />
//         </div>
//       )}
//       <h1>{collection.title}</h1>
//     </Link>
//   );
// }

// function RecommendedProducts({
//   products,
// }: {
//   products: Promise<RecommendedProductsQuery | null>;
// }) {
//   return (
//     <div className="recommended-products">
//       <h2>Recommended Products</h2>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Await resolve={products}>
//           {(response) => (
//             <div className="recommended-products-grid">
//               {response
//                 ? response.products.nodes.map((product) => (
//                     <Link
//                       key={product.id}
//                       className="recommended-product"
//                       to={`/products/${product.handle}`}
//                     >
//                       <Image
//                         data={product.images.nodes[0]}
//                         aspectRatio="1/1"
//                         sizes="(min-width: 45em) 20vw, 50vw"
//                       />
//                       <h4>{product.title}</h4>
//                       <small>
//                         <Money data={product.priceRange.minVariantPrice} />
//                       </small>
//                     </Link>
//                   ))
//                 : null}
//             </div>
//           )}
//         </Await>
//       </Suspense>
//       <br />
//     </div>
//   );
// }
