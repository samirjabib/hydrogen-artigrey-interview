import 'swiper/css';
import 'swiper/css/navigation';

import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import VideoSlideContent from './VideoSlideContent';
import VideoSlideInfo from './VideoSlideInfo';

interface VideoSlide {
  id: number;
  videoSrc: string;
  title: string;
  price: string;
}

// Sample video data
const videoData: VideoSlide[] = [
  {
    id: 1,
    videoSrc: '/videos/video1.mp4',
    title: 'Magnesium L-Threonate 1',
    price: '$49.95',
  },
  {
    id: 2,
    videoSrc: '/videos/video2.mp4',
    title: 'Magnesium L-Threonate 2',
    price: '$49.95',
  },
  {
    id: 3,
    videoSrc: '/videos/video3.mp4',
    title: 'Magnesium L-Threonate 3',
    price: '$49.95',
  },
  {
    id: 4,
    videoSrc: '/videos/video4.mp4',
    title: 'Magnesium L-Threonate 4',
    price: '$49.95',
  },
  {
    id: 5,
    videoSrc: '/videos/video5.mp4',
    title: 'Magnesium L-Threonate 5',
    price: '$49.95',
  },
  {
    id: 6,
    videoSrc: '/videos/video5.mp4',
    title: 'Magnesium L-Threonate 5',
    price: '$49.95',
  },
  {
    id: 7,
    videoSrc: '/videos/video5.mp4',
    title: 'Magnesium L-Threonate 5',
    price: '$49.95',
  },
];

export const VideoSwiper: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const middleIndex = Math.floor(videoData.length / 2);

  return (
    <div className="w-full flex flex-col items-center h-[1050px] md:h-[923px] bg-[#F6F6F5] border-2">
      <HeadingSwiper
        title="Real People. Real Results."
        subtitle="Trusted & Proven by Science"
        className="pt-14"
        swiperRef={swiperRef}
        isEnd={swiperRef.current?.isEnd || false}
        isBeginning={swiperRef.current?.isBeginning || false}
      />

      <Swiper
        initialSlide={middleIndex}
        centeredSlides={true}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // breakpoints={{
        //   375: {spaceBetween: 10, slidesPerView: 1.25},
        //   800: {spaceBetween: 20, slidesPerView: 2},
        //   1280: {spaceBetween: 20, slidesPerView: 5.25},
        // }}
        slidesPerView={'auto'}
        className="w-full h-auto !absolute mt-96 md:mt-72"
        role="region"
        aria-label="Video Swiper"
      >
        {videoData.map((video, index) => (
          <SwiperSlide
            key={video.id}
            className={`transition-transform duration-500 ease-in-out ${
              activeIndex === index ? 'relative bottom-10 z-10' : 'relative z-0'
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${video.title} - ${video.price}`}
            style={{
              width: '300px',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <VideoSlideContent video={video} isActive={activeIndex === index} />
            <VideoSlideInfo video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
