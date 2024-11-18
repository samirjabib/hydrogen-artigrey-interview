import React from 'react';
import {InstagramFollow} from './InstagramFollow';
import {Image} from '@shopify/hydrogen';
import type {InstagramFeedProps} from './types';

export const InstagramGridDesktop: React.FC<InstagramFeedProps> = ({
  username,
  images,
}) => (
  <section
    aria-labelledby="instagram-feed-heading"
    className="md:flex flex-row flex-wrap gap-[10px] pb-20 hidden"
  >
    <InstagramFollow username={username} />
    {images.map(({id, src}) => (
      <div key={id} className="w-[245px] h-[245px] rounded-lg">
        <Image
          src={src}
          alt={`Instagram post ${id}`}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    ))}
  </section>
);
