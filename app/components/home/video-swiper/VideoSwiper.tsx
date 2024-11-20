import React, {useRef, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import type {VideosSwiperQuery} from 'storefrontapi.generated';
import {VideoSlideInfo} from './VideoSlideInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import VideoSlideContent from './VideoSlideContent';

export const VideoSwiper = ({
  videoSwiper,
}: {
  videoSwiper: VideosSwiperQuery['metaobjects'];
}) => {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videosUrl, setVideosUrl] = useState<any[]>([]);
  const [middleIndex, setMiddleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '50px',
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const videos = videoSwiper.edges[0]?.node.fields[2]?.references?.edges;
    if (videos) {
      const processedVideos = videos.map((video: any) => ({
        url: video.node.sources[2].url,
        id: video.node.id || Math.random().toString(36).substr(2, 9),
      }));
      setVideosUrl(processedVideos);
      setMiddleIndex(Math.floor(videos.length / 2));
    }
  }, [videoSwiper]);

  if (!videosUrl.length) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const reference = videoSwiper.edges[0]?.node?.fields[0]?.reference! as any;

  const product = {
    title: reference.title,
    price: reference.priceRange.minVariantPrice.amount,
    image: reference.featuredImage.url,
    id: reference.id,
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center h-[1050px] md:h-[923px] bg-[#F6F6F5]"
    >
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
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={'auto'}
        className="w-full h-auto !pt-16"
        role="region"
        aria-label="Video Swiper"
      >
        {videosUrl.map((video: any, index) => {
          const isActive = activeIndex === index;
          const shouldPlay = isVisible && isActive;


          return (
            <SwiperSlide
              key={video.id}
              className={`transition-transform duration-500 ease-in-out ${
                isActive ? 'relative bottom-10 z-10' : 'relative z-0'
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Video ${index + 1}`}
              style={{
                width: '300px',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <VideoSlideContent
                videoUrl={video.url}
                isActive={isActive}
                shouldPlay={shouldPlay}
              />
              <VideoSlideInfo
                imageSrc={product.image}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
