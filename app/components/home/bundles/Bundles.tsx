import { NavLink } from '@remix-run/react';
import type {
  CollectionProductFragment,
} from 'storefrontapi.generated';
import { Heading } from '~/components/design-system/Heading';
import { SwiperNavButton } from '~/components/design-system/SwiperNavButton';
import { useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { ProductCard } from '~/components/product/product-card/ProductCard';
import { navItems } from './constants';
import { BundlesProps } from './types';



export const Bundles = ({
  initialBundle,
}: BundlesProps) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [selectedItem, setSelectedItem] = useState(navItems[0]);
  const [collection, setCollection] = useState(
    initialBundle?.products.edges || [],
  );

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
          375: { spaceBetween: 10, slidesPerView: 1 },
          800: { spaceBetween: 20, slidesPerView: 2 },
          1280: { spaceBetween: 20, slidesPerView: 4 },
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
              <ProductCard product={product} variant="gray" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
