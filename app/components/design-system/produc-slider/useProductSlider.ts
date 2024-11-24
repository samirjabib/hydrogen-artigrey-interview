// useProductSlider.ts
import { useState, useCallback, useRef, useMemo } from 'react';
import type { CollectionProductFragment } from 'storefrontapi.generated';
import { SwiperType } from '~/types';

interface UseProductSliderProps {
    products: Array<{ node: CollectionProductFragment }>;
    bestSellerIndices?: number[];
}

/**
 * Creates an enriched version of the products array
 * with a "isBestSeller" property based on the bestSellerIndices.
 *
 * This is a helper function for mocking purposes.
 *
 * @param {Array<{ node: CollectionProductFragment }>} products
 * @param {number[]} bestSellerIndices
 * @returns {Array<{ node: CollectionProductFragment; isBestSeller: boolean }>} Enriched products array
 */
export const useEnrichedProducts = (
    products: Array<{ node: CollectionProductFragment }>,
    bestSellerIndices: number[] = [0, 3]
) => {
    return products.map((item, index) => ({
        ...(item.node as unknown as CollectionProductFragment),
        isBestSeller: bestSellerIndices.includes(index),
    }));
};


export const useProductSlider = ({
    products,
    bestSellerIndices = [0, 3],
}: {
    products: Array<{ node: CollectionProductFragment }>;
    bestSellerIndices?: number[];
}) => {
    const swiperRef = useRef<SwiperType>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiperInit = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper;
    }, []);

    const handleSlideChange = useCallback((swiper: SwiperType) => {
        if (!swiper) return;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }, []);

    const enrichedProducts = useMemo(() =>
        products.map((item, index) => ({
            ...(item.node as unknown as CollectionProductFragment),
            isBestSeller: bestSellerIndices.includes(index),
        })),
        [products, bestSellerIndices]
    );

    return {

        // Swiper states
        swiperRef,
        isBeginning,
        isEnd,
        handleSwiperInit,
        handleSlideChange,

        // Product states
        products,
        enrichedProducts,


    };
};