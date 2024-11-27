import 'swiper/css';
import { Await } from "@remix-run/react";
import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RootLayoutProps } from "~/types";
import { SwiperNavButton } from '~/components/design-system/SwiperNavButton';
import { useSwiper } from '~/hooks/useSwiper';
import { CartProductCard } from './CartProductCard';


export const RecommendProducts = ({
    enhanceCollection
}: {
    enhanceCollection: RootLayoutProps['enhanceCollection']
}) => {
    const {
        swiperRef,
        isBeginning,
        isEnd,
        handleSwiperInit,
        handleSlideChange
    } = useSwiper();

    return (
        <Suspense fallback={<div>Loading recommendations...</div>}>
            <Await resolve={enhanceCollection}>
                {(resolvedCollection) => {
                    if (!resolvedCollection?.collectionByHandle) return null;

                    const products = resolvedCollection.collectionByHandle.products.edges;

                    return (
                        <div className="mt-8">
                            <div className="flex items-center justify-between mb-5 px-[30px]">
                                <h3 className="text-lg font-medium">Enhance Your Performance</h3>
                                <div className="flex flex-row gap-3">
                                    <SwiperNavButton
                                        direction="prev"
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        disabled={isBeginning}
                                    />
                                    <SwiperNavButton
                                        direction="next"
                                        onClick={() => swiperRef.current?.slideNext()}
                                        disabled={isEnd}
                                    />
                                </div>
                            </div>
                            <div className='pl-[30px]'>
                                <Swiper
                                    onSwiper={handleSwiperInit}
                                    onSlideChange={handleSlideChange}
                                    spaceBetween={16}
                                    className="w-full pl-[30px]"
                                    breakpoints={{
                                        300: { slidesPerView: 1.4 },
                                        480: { slidesPerView: 2.4 },

                                    }}
                                >
                                    {products.map(({ node: product }) => (
                                        <SwiperSlide key={product.id}>
                                            <CartProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
};