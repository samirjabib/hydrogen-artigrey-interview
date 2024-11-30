import React from 'react';
import { InstagramFollow } from './InstagramFollow';
import { Image } from '@shopify/hydrogen';
import type { InstagramFeedProps } from '../types';

export const InstagramGridDesktop: React.FC<InstagramFeedProps> = ({
  username,
  images,
}) => (
  <section
    aria-labelledby="instagram-feed-heading"
    className="hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-4 pb-20"
  >
    <div className="col-span-2">
      <InstagramFollow username={username} />
    </div>

    {images.map(({ id, src }) => (
      <div
        key={id}
        className="col-span-1 aspect-square overflow-hidden rounded-lg bg-gray-200 transition-transform hover:scale-[1.02]"
      >
        <Image
          src={src}
          alt={`Instagram post ${id}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          width={400}
          height={400}
          loading="lazy"
          sizes="(min-width: 1280px) 16.66vw, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    ))}
  </section>
);
