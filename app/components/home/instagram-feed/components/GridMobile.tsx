import React from 'react';
import { InstagramFollow } from './InstagramFollow';
import { Image } from '@shopify/hydrogen';
import type { InstagramFeedProps } from '../types';

export const InstagramGridMobile: React.FC<InstagramFeedProps> = ({
  username,
  images,
}) => {
  return (
    <section aria-labelledby="instagram-feed-heading" className="md:hidden">
      <InstagramFollow username={username} />

      <div className="grid grid-cols-2 gap-[10px]">
        {images.slice(0, 6).map((image) => (
          <div key={image.id} className=" h-[200px] rounded-lg">
            <Image
              key={image.id}
              src={image.src}
              alt={`Instagram post ${image.id}`}
              className="w-full h-full object-cover rounded-lg"
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
