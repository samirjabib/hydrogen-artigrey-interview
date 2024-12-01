import { useEffect, useRef } from 'react';
import { cn } from '~/utils/cn';
import { VideoSlideContentProps } from '../types';


const VideoSlideContent = ({
  videoUrl,
  isActive,
  shouldPlay,
}: VideoSlideContentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoStatus = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (shouldPlay) {
      videoElement.play().catch((error) => {
        console.log('Error al reproducir el video:', error);
      });
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };


  useEffect(() => {
    handleVideoStatus();
  }, [shouldPlay]);

  return (
    <div
      className={cn(
        'relative w-full rounded-md mb-4 transition-[height] duration-200 h-[420px]',
        isActive ? 'opacity-100 h-[500px]' : null,
      )}
      style={{ transformOrigin: 'center' }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        playsInline
        webkit-playsinline="true"
        crossOrigin="anonymous"
        aria-label="Background video"
        className={cn(
          'w-full h- object-cover h-[420px] rounded-md transition-all',
          isActive ? 'h-[500px]' : null,
        )}
        aria-hidden={!isActive}
      >
        <track kind="captions" srcLang="en" label="English captions" />
      </video>
    </div>
  );
};

export default VideoSlideContent;
