import {defer, type LoaderFunctionArgs} from '@netlify/remix-runtime';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  BrandsCardsQuery,
  FeaturedCollectionFragment,
  FeaturedCollectionQuery,
  GoalsCardsQuery,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import {Banner, Brands, Promises} from '~/components';
import {getCriticalData, getDeferredData} from '~/services/home';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

type LoaderData = {
  goals: GoalsCardsQuery['metaobjects']['edges'];
  brands: BrandsCardsQuery['metaobjects']['edges'];
  collections: FeaturedCollectionQuery;
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = getDeferredData(args);
  const criticalData = await getCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>() as LoaderData;
  console.log(data);
  return (
    <div className="home">
      <Banner />
      <Promises />
      <Brands brands={data?.brands} />
      {/* 
      <Goals goals={data?.goals} /> */}
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
