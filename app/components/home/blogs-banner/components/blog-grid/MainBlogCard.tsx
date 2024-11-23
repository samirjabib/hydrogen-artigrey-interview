import { Image } from '@shopify/hydrogen';
import React from 'react';
import { formatDate } from '~/utils/format-date';
import type { MainBlogCardProps } from '../../types';

export const MainBlogCard: React.FC<MainBlogCardProps> = ({
  imageSrc,
  title,
  tag,
  publishedAt,
  author,
}) => {
  return (
    <article
      className="relative w-full lg:w-1/2 h-[450px] group mb-8 md:mb-0"
      aria-labelledby="main-blog-title"
    >
      <Image
        src={imageSrc}
        alt={title}
        className="absolute h-full w-full object-cover rounded-lg"
      />
      <div className="absolute w-full h-full p-5 lg:p-8 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg">
        <h3 id="main-blog-tag" className="text text-white mb-2">
          {tag}
        </h3>
        <h2
          id="main-blog-title"
          className="text-white font-medium text-xl md:text-2xl leading-7 mb-[51px] line-clamp-2 max-w-[370px]"
        >
          {title}
        </h2>
        <div className="flex flex-row items-center">
          <p
            className="text-white/90 text-sm md:text-base leading-5"
            id="main-blog-date"
          >
            {formatDate(publishedAt)}
          </p>
          <span className="text text-sm mx-4 text-white/20">|</span>
          <p
            className="text-white/90 text-sm md:text-base leading-5"
            id="main-blog-author"
          >
            By {author}
          </p>
        </div>
      </div>
    </article>
  );
};
