import React from 'react';
import { InstagramFollow } from './components/InstagramFollow';
import { Image } from '@shopify/hydrogen';
import type { InstagramFeedProps } from './types';
import { InstagramGridDesktop } from './components/GridDesktop';
import { InstagramGridMobile } from './components/GridMobile';

export const InstagramFeed: React.FC<InstagramFeedProps> = ({
  username,
  images,
}) => {
  return (
    <div
      aria-labelledby="instagram-feed"
      className="pb-20 w-full wrapper px-4 md:px-10 "
    >
      <InstagramGridDesktop username={username} images={images} />
      <InstagramGridMobile username={username} images={images} />
    </div>
  );
};
