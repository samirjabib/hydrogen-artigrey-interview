import {NavLink} from '@remix-run/react';
import type {
  CollectionByHandleQuery,
  CollectionProductFragment,
} from 'storefrontapi.generated';
import {Heading} from '~/components/ui/Heading';
import {SwiperNavButton} from '~/components/ui/SwiperNavButton';
import {COLLECTION_BY_HANDLE_QUERY} from '~/queries/fragments/collection';
import {useRef, useState} from 'react';
import {ProductCard} from '../../ui/product-card/ProductCard';
import {SwiperSlide, Swiper} from 'swiper/react';

const navItems: {id: number; title: string; handle: string}[] = [
  {
    id: 1,
    title: 'Sleep',
    handle: 'sleep',
  },
  {
    id: 2,
    title: 'Cognitive Function',
    handle: 'cognitive-function',
  },
  {
    id: 3,
    title: 'Foundational Health',
    handle: 'foundational-health',
  },
  {
    id: 4,
    title: 'Athletic Health',
    handle: 'athletic-health',
  },
  {
    id: 5,
    title: 'Hormone Support',
    handle: 'hormone-support',
  },
];

export const Bundles = ({
  initialBundle,
}: {
  initialBundle: CollectionByHandleQuery['collectionByHandle'];
}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [selectedItem, setSelectedItem] = useState(navItems[0]);
  const [collection, setCollection] = useState(
    initialBundle?.products.edges || [],
  );

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     try {
  //       const context = {
  //         storefront: {
  //           query: async (query, variables) => {
  //             const response = await fetch('/api/graphql', {
  //               method: 'POST',
  //               headers: {'Content-Type': 'application/json'},
  //               body: JSON.stringify({query, variables}),
  //             });
  //             return await response.json();
  //           },
  //         },
  //       };
  //       const response = await context.storefront.query(
  //         COLLECTION_BY_HANDLE_QUERY,
  //         {
  //           variables: {handle: selectedItem},
  //         },
  //       );
  //       setCollection(response.collectionByHandle?.products || []);
  //     } catch (error) {
  //       console.error('Error fetching collection:', error);
  //     }
  //   };

  //   fetchCollection();
  // }, [selectedItem]);

  // const handleMenuClick = (item: string) => {
  //   setSelectedItem(item);
  // };

  return (
    <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">
      <div className="flex flex-col md:pb-[50px] md:flex-row items-center justify-between w-full">
        <Heading subtitle="📦 Goals Specific" title="Bundles" />
        <nav>
          <ul className="flex flex-row flex-wrap justify-center py-12 md:py-0 items-center md:justify-start gap-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="border-black/10 text-sm font-normal leading-4 text-[#1B1F23]"
              >
                <button onClick={() => setSelectedItem(item)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row items-center gap-6 pb-8 md:pb-0">
          <NavLink
            to="/bundles/1"
            className="text-lg underline leading-5 font-normal text-[#1B1F23]"
          >
            View All Bundles
          </NavLink>
          <div className="flex flex-row items-center gap-4">
            <SwiperNavButton
              disabled={isBeginning}
              direction="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SwiperNavButton
              disabled={isEnd}
              direction="next"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          375: {spaceBetween: 10, slidesPerView: 1},
          800: {spaceBetween: 20, slidesPerView: 2},
          1280: {spaceBetween: 20, slidesPerView: 4},
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="w-full"
      >
        {collection.map((item) => {
          const product = item.node as unknown as CollectionProductFragment;

          return (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} variant="grey" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
