import { SwiperType } from "~/types";
import { Heading } from "../Heading";
import { NavLink } from "@remix-run/react";
import { SwiperNavButton } from "../SwiperNavButton";
import { HeadingSwiper } from "../HeadingSwiper";
import { ProductSliderHeaderProps } from "./types";
import { NavigationMenu } from "~/components/home/bundles/components/NavigationMenu";
import { navItems } from "~/components/home/bundles/constants";



export const ProductSliderHeader: React.FC<ProductSliderHeaderProps> = ({
    title,
    subtitle,
    showViewAll,
    viewAllLink = '/',
    viewAllText = 'View All',
    headerVariant = 'swiper',
    swiperRef,
    isBeginning,
    selectedItem,
    isEnd,
    onSelectItem,

}) => {
    if (headerVariant === 'swiper') {/*  */
        return (
            <HeadingSwiper
                isEnd={isEnd}
                isBeginning={isBeginning}
                title={title}
                swiperRef={swiperRef}
                subtitle={subtitle}
                className="mb-12"
            />
        );
    }

    return (
        <div className="flex flex-col md:pb-[50px] lg:flex-row items-center justify-between w-full">
            <Heading subtitle={subtitle} title={title} />
            {navItems && selectedItem && onSelectItem && (
                <NavigationMenu
                    items={navItems}
                    selectedItem={selectedItem}
                    onSelectItem={onSelectItem}
                />
            )}
            {showViewAll && (
                <div className="flex flex-col lg:flex-row items-center gap-6 pb-8 md:pb-0">
                    <NavLink
                        to={viewAllLink}
                        className="text-lg underline leading-5 font-normal text-[#1B1F23]"
                    >
                        {viewAllText}
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
            )}
        </div>
    );
};
