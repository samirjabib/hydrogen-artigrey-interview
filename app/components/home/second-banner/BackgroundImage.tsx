import React from 'react';
import { Image } from '@shopify/hydrogen';
import { cn } from '~/utils/cn';

export type BackgroundImageProps = {
  imageUrl: string;
  className?: string;
  altText?: string;
  overlayColor?: string;
  overlayOpacity?: number;
};

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  className = '',
  altText = 'Background image',
  overlayColor = 'black',
  overlayOpacity = 0.4,
}) => {
  return (
    <div className={cn('absolute w-full h-full', className)}>
      <Image
        src={imageUrl}
        alt={altText}
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover object-right md:object-center rounded-lg"
      />

      <div
        className="absolute inset-0 rounded-lg"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      ></div>
    </div>
  );
};