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
    className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-4 pb-20"
  >
    <div className="col-span-2">
      <InstagramFollow username={username} />
    </div>

    {images.map(({id, src}) => (
      <div
        key={id}
        className="col-span-1 aspect-square overflow-hidden rounded-lg bg-gray-200"
      >
        <Image
          src={src}
          alt={`Instagram post ${id}`}
          className="w-full h-full object-cover"
          width={250}
          height={250}
        />
      </div>
    ))}
  </section>
);
