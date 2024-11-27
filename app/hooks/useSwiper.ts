import { useCallback, useRef, useState } from "react";
import { SwiperType } from "~/types";

export const useSwiper = () => {
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

    return {
        swiperRef,
        isBeginning,
        isEnd,
        handleSwiperInit,
        handleSlideChange,
    };
};