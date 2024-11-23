import { VideosSwiperQuery } from "storefrontapi.generated";

export type VideoSlideContentProps = {
    videoUrl: string;
    isActive: boolean;
    shouldPlay: boolean;
}

export type Video = {
    url: string;
    id: string;
}

export type ProductInfo = {
    title: string;
    price: string;
    image: string;
    id: string;
}

export type VideoSliceProductCardProps = {
    title: string;
    price: string;
    imageSrc: string;
}

export type VideoSwiperProps = {
    videoSwiper: VideosSwiperQuery['metaobjects'];
}