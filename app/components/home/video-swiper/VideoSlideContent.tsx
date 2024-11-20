import React, {useEffect, useRef} from 'react';
import {cn} from '~/utils/cn';

interface VideoSlideContentProps {
  videoUrl: string;
  isActive: boolean;
  shouldPlay: boolean;
}

const VideoSlideContent = ({
  videoUrl,
  isActive,
  shouldPlay,
}: VideoSlideContentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
  }, [shouldPlay]);

  return (
    <div
      className={cn(
        'relative w-full rounded-md mb-4 transition-all h-[420px]',
        isActive ? 'opacity-100 h-[500px]' : null,
      )}
      style={{transformOrigin: 'center'}}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        playsInline
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
