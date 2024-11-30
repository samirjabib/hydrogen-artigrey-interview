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
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] lg:w-1/2 group mb-8 md:mb-0 hover:opacity-90 transition-opacity transition-all cursor-pointer"
      aria-labelledby="main-blog-title"
    >
      <Image
        src={imageSrc}
        alt={title}
        className="absolute h-full w-full object-cover rounded-lg"
        width={800}
        height={800}
        sizes="(min-width: 1200px) 50vw, 100vw"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 w-full p-4 sm:p-6 lg:p-8 flex flex-col">
          <h3 id="main-blog-tag" className="text text-white mb-2 sm:mb-3">
            {tag}
          </h3>
          <h2
            id="main-blog-title"
            className="text-white font-medium text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-7 mb-4 sm:mb-6 lg:mb-[51px] line-clamp-2 max-w-[370px]"
          >
            {title}
          </h2>
          <div className="flex flex-row items-center">
            <p
              className="text-white/90 text-xs sm:text-sm lg:text-base leading-5"
              id="main-blog-date"
            >
              {formatDate(publishedAt)}
            </p>
            <span className="text text-sm mx-2 sm:mx-4 text-white/20">|</span>
            <p
              className="text-white/90 text-xs sm:text-sm lg:text-base leading-5"
              id="main-blog-author"
            >
              By {author}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
