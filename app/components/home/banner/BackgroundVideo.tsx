import React, {useEffect, useRef} from 'react';
import {cn} from '~/utils/cn';

export type BackgroundVideoProps = {
  videoUrl: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);

  return (
    <div className={cn('absolute top-0 left-0 w-f', className)}>
      <video
        ref={videoRef}
        className=" w-full h-full object-cover -z-10"
        src={videoUrl}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => {
          (e.currentTarget as HTMLVideoElement).style.display = 'none';
        }}
      >
        <track kind="captions" />
      </video>
      <div
        className="absolute inset-0 bg-black opacity-30 z-0"
        aria-hidden="true"
      ></div>
    </div>
  );
};
