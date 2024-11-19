import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {cn} from '~/utils/cn';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';

// Define the type for video slides
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

  // Calculate the middle index
  const middleIndex = Math.floor(videoData.length / 2);

  return (
    <div className="w-full flex flex-col items-center py-20">
      <HeadingSwiper
        title="Real People. Real Results."
        subtitle="Trusted & Proven by Science"
        className="pb-14"
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
        slidesPerView="auto"
        className="w-full h-auto"
        role="region"
        aria-label="Video Swiper"
      >
        {videoData.map((video, index) => (
          <SwiperSlide
            key={video.id}
            className={cn(
              '',
              activeIndex === index
                ? 'scale-105 opacity-100 '
                : 'scale-90 opacity-60',
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${video.title} - ${video.price}`}
            style={{width: '300px'}} // Set slide width
          >
            <div
              className={cn(
                'relative w-full bg-black rounded-md overflow-hidden',
              )}
            >
              <div
                className={cn(
                  'transition-all duration-300 ease-in-out h-[420px]',
                )}
              >
                <video
                  src={video.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                  aria-hidden={activeIndex !== index}
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-2 text-center">
              <p className="text-lg font-semibold">{video.title}</p>
              <p className="text-gray-600">{video.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
