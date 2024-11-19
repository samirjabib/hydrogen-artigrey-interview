import React from 'react';
import {cn} from '~/utils/cn';

interface VideoSlide {
  id: number;
  videoSrc: string;
  title: string;
  price: string;
}

const VideoSlideContent: React.FC<{video: VideoSlide; isActive: boolean}> = ({
  video,
  isActive,
}) => (
  <div
    className={cn(
      'relative w-full bg-black rounded-md mb-4 transition-all h-[420px]',
      isActive ? 'opacity-100 h-[500px]' : 'opacity-70',
    )}
    style={{transformOrigin: 'center'}}
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

export default VideoSlideContent;
