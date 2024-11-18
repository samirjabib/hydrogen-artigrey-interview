import React from 'react';
import {InstagramFollow} from './InstagramFollow';
import {Image} from '@shopify/hydrogen';
import type {InstagramFeedProps} from './types';
import {InstagramGridDesktop} from './GridDesktop';
import {InstagramGridMobile} from './GridMobile';

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
