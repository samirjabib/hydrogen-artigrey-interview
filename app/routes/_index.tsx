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
import {InstagramSection} from '~/components/home/instagram/Instagram';
import {SecondBanner} from '~/components/home/second-banner/SecondBanner';
import type {BlogsQuery} from '~/queries/blogs';
import {getCriticalData, getDeferredData} from '~/services/home';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
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
      {/* <InstagramSection
        logo="https://res.cloudinary.com/dsxn0nfhf/image/upload/v1669171503/instagram/logo.png"
        username="samirjabib"
        images={[
          'https://s3-alpha-sig.figma.com/img/134d/3f4c/1eedbeee8e2ac3ae1779c55abddedda1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8YHY8F8EXvzPaV0O8P2Ox6g0Ud7QwmjS76oMp-xKkf-SAzED72WdvZOtzs6uPNYUWYHfm4j3AirB0HJ8~U9mKS8sZ3N9vZ~B3WcmCQtZDxRoyxDE2om3Yv-iaYmir8blJpbqbZzMtRvYKvZbIPwY91rjreFX-HqNHg~qGUnskifXBm2nJCmR5AWmEFnIXIHrQJ9cD-v1LpQEzNibRV6SZ7hJ8FRfT3ab-Vpf4gLIvfT2l4GeCBAvHzRpUYPWzRyp3vSy6GYIz8m-PZngEG8gKX4wB7rglyr1AT1FygILgbSTlPnEIhy2M~vq71a7lB0DrG71nrXKNraUT6HUKUi6w__',
          'https://s3-alpha-sig.figma.com/img/134d/3f4c/1eedbeee8e2ac3ae1779c55abddedda1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8YHY8F8EXvzPaV0O8P2Ox6g0Ud7QwmjS76oMp-xKkf-SAzED72WdvZOtzs6uPNYUWYHfm4j3AirB0HJ8~U9mKS8sZ3N9vZ~B3WcmCQtZDxRoyxDE2om3Yv-iaYmir8blJpbqbZzMtRvYKvZbIPwY91rjreFX-HqNHg~qGUnskifXBm2nJCmR5AWmEFnIXIHrQJ9cD-v1LpQEzNibRV6SZ7hJ8FRfT3ab-Vpf4gLIvfT2l4GeCBAvHzRpUYPWzRyp3vSy6GYIz8m-PZngEG8gKX4wB7rglyr1AT1FygILgbSTlPnEIhy2M~vq71a7lB0DrG71nrXKNraUT6HUKUi6w__',
          'https://s3-alpha-sig.figma.com/img/134d/3f4c/1eedbeee8e2ac3ae1779c55abddedda1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8YHY8F8EXvzPaV0O8P2Ox6g0Ud7QwmjS76oMp-xKkf-SAzED72WdvZOtzs6uPNYUWYHfm4j3AirB0HJ8~U9mKS8sZ3N9vZ~B3WcmCQtZDxRoyxDE2om3Yv-iaYmir8blJpbqbZzMtRvYKvZbIPwY91rjreFX-HqNHg~qGUnskifXBm2nJCmR5AWmEFnIXIHrQJ9cD-v1LpQEzNibRV6SZ7hJ8FRfT3ab-Vpf4gLIvfT2l4GeCBAvHzRpUYPWzRyp3vSy6GYIz8m-PZngEG8gKX4wB7rglyr1AT1FygILgbSTlPnEIhy2M~vq71a7lB0DrG71nrXKNraUT6HUKUi6w__',
          'https://s3-alpha-sig.figma.com/img/134d/3f4c/1eedbeee8e2ac3ae1779c55abddedda1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8YHY8F8EXvzPaV0O8P2Ox6g0Ud7QwmjS76oMp-xKkf-SAzED72WdvZOtzs6uPNYUWYHfm4j3AirB0HJ8~U9mKS8sZ3N9vZ~B3WcmCQtZDxRoyxDE2om3Yv-iaYmir8blJpbqbZzMtRvYKvZbIPwY91rjreFX-HqNHg~qGUnskifXBm2nJCmR5AWmEFnIXIHrQJ9cD-v1LpQEzNibRV6SZ7hJ8FRfT3ab-Vpf4gLIvfT2l4GeCBAvHzRpUYPWzRyp3vSy6GYIz8m-PZngEG8gKX4wB7rglyr1AT1FygILgbSTlPnEIhy2M~vq71a7lB0DrG71nrXKNraUT6HUKUi6w__',
          'https://s3-alpha-sig.figma.com/img/134d/3f4c/1eedbeee8e2ac3ae1779c55abddedda1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8YHY8F8EXvzPaV0O8P2Ox6g0Ud7QwmjS76oMp-xKkf-SAzED72WdvZOtzs6uPNYUWYHfm4j3AirB0HJ8~U9mKS8sZ3N9vZ~B3WcmCQtZDxRoyxDE2om3Yv-iaYmir8blJpbqbZzMtRvYKvZbIPwY91rjreFX-HqNHg~qGUnskifXBm2nJCmR5AWmEFnIXIHrQJ9cD-v1LpQEzNibRV6SZ7hJ8FRfT3ab-Vpf4gLIvfT2l4GeCBAvHzRpUYPWzRyp3vSy6GYIz8m-PZngEG8gKX4wB7rglyr1AT1FygILgbSTlPnEIhy2M~vq71a7lB0DrG71nrXKNraUT6HUKUi6w__',
        ]}
      /> */}
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
