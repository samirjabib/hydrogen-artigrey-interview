import React, {useState, useCallback} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {HeadingSwiper} from '~/components/ui/HeadingSwiper';
import type {VideosSwiperQuery} from 'storefrontapi.generated';
import {VideoSlideInfo} from './VideoSlideInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import VideoSlideContent from './VideoSlideContent';

interface Video {
  url: string;
  id: string;
}

interface VideoSwiperProps {
  videoSwiper: VideosSwiperQuery['metaobjects'];
}

export const VideoSwiper = ({videoSwiper}: VideoSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [videosUrl, setVideosUrl] = useState<Video[]>([]);
  const [middleIndex, setMiddleIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Callback ref para inicializar el observer cuando el contenedor esté disponible
  const containerRefCallback = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.5,
          rootMargin: '50px',
        },
      );

      observer.observe(node);

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  React.useEffect(() => {
    const videoEdges = videoSwiper.edges[0]?.node.fields[2]?.references?.edges;
    if (videoEdges) {
      const processedVideos: Video[] = videoEdges.map((video: any) => ({
        url: video.node.sources[2].url,
        id: video.node.id || Math.random().toString(36).substr(2, 9),
      }));
      setVideosUrl(processedVideos);
      setMiddleIndex(Math.floor(videoEdges.length / 2));
    }
  }, [videoSwiper]);

  if (!videosUrl.length) {
    return null;
  }

  const reference = videoSwiper.edges[0]?.node?.fields[0]?.reference as any;

  const product = {
    title: reference.title,
    price: reference.priceRange.minVariantPrice.amount,
    image: reference.featuredImage.url,
    id: reference.id,
  };

  const handleSlideChange = (swiper: {realIndex: number}) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div
      ref={containerRefCallback}
      className="w-full flex flex-col items-center h-[1050px] md:h-[923px] bg-[#F6F6F5]"
    >
      <HeadingSwiper
        title="Real People. Real Results."
        subtitle="Trusted & Proven by Science"
        className="pt-14"
        swiperRef={null}
        isEnd={false}
        isBeginning={false}
      />
      <Swiper
        initialSlide={middleIndex}
        centeredSlides={true}
        spaceBetween={10}
        onSlideChange={handleSlideChange}
        slidesPerView="auto"
        className="w-full h-auto !pt-16"
        role="region"
        aria-label="Video Swiper"
      >
        {videosUrl.map((video, index) => {
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
