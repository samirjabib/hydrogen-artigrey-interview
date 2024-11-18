import React, {useRef} from 'react';
import {cn} from '~/utils/cn';
import type {BackgroundVideoProps} from './types';

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className={cn('absolute top-0 left-0 w-f', className)}
      aria-hidden="true"
      role="img"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover -z-10"
        src={videoUrl}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload="auto"
        crossOrigin="anonymous"
        aria-label="Background video"
      >
        <track kind="captions" srcLang="en" />
        <track kind="subtitles" srcLang="en" />
        <track kind="descriptions" srcLang="en" />
      </video>
    </div>
  );
};
