import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {cn} from '~/utils/cn';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import {Image} from '@shopify/hydrogen';
import {Plus} from 'lucide-react';

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

const VideoSlideContent: React.FC<{video: VideoSlide; isActive: boolean}> = ({
  video,
  isActive,
}) => (
  <div
    className={cn(
      'relative w-full bg-black rounded-md overflow-hidden mb-4',
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
      aria-hidden={!isActive}
    />
  </div>
);

const VideoSlideInfo: React.FC<{video: VideoSlide}> = ({video}) => (
  <div className="py-[5px] bg-white pl-[5px] flex flex-row items-center justify-between pr-4 rounded-lg">
    <div className="flex flex-row items-center justify-start gap-[10px]">
      <div className="rounded-md w-[70px] h-[70px] flex items-center justify-center bg-[#F6F6F5]">
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/omega-3_31e57120-b358-4641-8494-2e98458b24d7.png?v=1732035059"
          width={50}
          height={50}
        />
      </div>
      <div>
        <h3 className="font-normal leading-4 text-[13px] text-[#1B1F23] mb-2">
          {video.title}
        </h3>
        <p className="text-[#1B1F23] text-start text-[12px] leading-4 font-medium">
          {video.price}
        </p>
      </div>
    </div>
    <div
      className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer"
      aria-label="Add to cart"
      role="button"
    >
      <Plus className="text-white" />
    </div>
  </div>
);

export const VideoSwiper: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the middle index
  const middleIndex = Math.floor(videoData.length / 2);

  return (
    <div className="w-full flex flex-col items-center py-20 bg-[#F6F6F5]">
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
              activeIndex === index ? 'scale-150 opacity-100' : 'opacity-60',
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${video.title} - ${video.price}`}
            style={{width: '300px', transition: 'transform 0.3s ease-in-out'}}
          >
            <VideoSlideContent video={video} isActive={activeIndex === index} />
            <VideoSlideInfo video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
