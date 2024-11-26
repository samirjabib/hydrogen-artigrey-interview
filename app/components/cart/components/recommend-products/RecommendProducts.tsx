
import 'swiper/css';
import { Await } from "@remix-run/react";
import { Suspense, useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RootLayoutProps, SwiperType } from "~/types";
import { SwiperNavButton } from '~/components/design-system/SwiperNavButton';
import { Image } from '@shopify/hydrogen';
import { ProductPrice } from '~/components/product/ProductPrice';
import { Plus } from 'lucide-react';

export const RecommendProducts = ({ enhanceCollection }: {
    enhanceCollection: RootLayoutProps['enhanceCollection']
}) => {

    const swiperRef = useRef<SwiperType>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiperInit = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper;
    }, []);


    return (
        < Suspense fallback={< div > Loading recommendations...</div >}>
            <Await resolve={enhanceCollection}>
                {(resolvedCollection) => {
                    if (!resolvedCollection?.collectionByHandle) return null;

                    const products = resolvedCollection.collectionByHandle.products.edges;

                    return (
                        <div className="mt-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium">Enhance Your Performance</h3>
                                <div className='flex flex-row gap-3'>
                                    <SwiperNavButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning} />
                                    <SwiperNavButton direction="next" onClick={() => swiperRef.current?.slideNext()} disabled={isEnd} />
                                </div>
                            </div>
                            <Swiper
                                onSwiper={handleSwiperInit}
                                onSlideChange={(swiper) => {
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                                spaceBetween={16}
                                slidesPerView="auto"
                                className="w-full"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    480: {
                                        slidesPerView: 2.4,
                                    },
                                }}
                            >
                                {products.map(({ node: product }) => (
                                    <SwiperSlide key={product.id} className="p-5">
                                        <div className='mb-4'>
                                            <div>
                                                <Image
                                                    src={product.images.nodes[0].url}
                                                    alt={product.title}
                                                    width={180}
                                                    height={140}
                                                    className="object-cover"
                                                />
                                            </div>

                                        </div>
                                        <h3 className='font-medium text-xs leading-[18px] mb-4 text-[#1B1F23]'>{product.title}</h3>
                                        <div className='flex flex-row items-center justify-between'>
                                            <ProductPrice price={product.priceRange.minVariantPrice} />
                                            <button className='flex flex-row items-center gap-2'>
                                                <span>Add to cart</span>
                                                <Plus />
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    );
                }}
            </Await>
        </Suspense >
    )

};