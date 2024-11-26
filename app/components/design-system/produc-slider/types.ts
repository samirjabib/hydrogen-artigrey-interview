import { CollectionProductFragment } from "storefrontapi.generated";
import { SwiperOptions } from "swiper/types";
import { NavItemProps } from "~/components/home/bundles/types";
import { SwiperType } from "~/types";

export interface ProductSliderProps {
    products: Array<{ node: CollectionProductFragment }>;
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'gray';
    showViewAll?: boolean;
    viewAllLink?: string;
    viewAllText?: string;
    headerVariant?: 'swiper' | 'default';
    bestSellerIndices?: number[];
    selectedItem?: NavItemProps
    isLoading?: boolean
    onSelectItem?: (item: NavItemProps) => void
}

export type ProductSliderHeaderProps = {
    title?: string;
    subtitle?: string;
    showViewAll?: boolean;
    viewAllLink?: string;
    viewAllText?: string;
    headerVariant?: 'swiper' | 'default';
    swiperRef: React.MutableRefObject<SwiperType | null>;
    isBeginning: boolean;
    isEnd: boolean
    onSelectItem?: (item: NavItemProps) => void
    selectedItem?: NavItemProps
    ;

};

export const SWIPER_BREAKPOINTS: SwiperOptions['breakpoints'] = {
    375: { spaceBetween: 10, slidesPerView: 1 },
    500: { spaceBetween: 10, slidesPerView: 2 },
    800: { spaceBetween: 20, slidesPerView: 3 },
    1400: { spaceBetween: 20, slidesPerView: 4 },
};