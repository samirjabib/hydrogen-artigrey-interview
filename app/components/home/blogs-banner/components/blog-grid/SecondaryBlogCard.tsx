import { Image } from '@shopify/hydrogen';
import React from 'react';
import { formatDate } from '~/utils/format-date';
import { SecondaryBlogCardProps } from '../../types';

export const SecondaryBlogCard: React.FC<SecondaryBlogCardProps> = ({
  imageSrc,
  title,
  tag,
  publishedAt,
}) => {
  return (
    <article
      className="flex flex-col sm:flex-row gap-4 sm:gap-5 h-auto sm:h-[180px] md:h-[215px] hover:opacity-90 transition-opacity cursor-pointer"
      role="listitem"
      aria-labelledby={`secondary-blog-title-${title}`}
    >
      <div className="w-full sm:w-[240px] md:w-[300px] h-[200px] sm:h-full overflow-hidden rounded-lg shrink-0 ">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          width={600}
          height={600}
          sizes="(min-width: 768px) 300px, (min-width: 640px) 240px, 100vw"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-3 sm:py-4 md:py-[31px]">
        <div>
          <h3
            id={`secondary-blog-tag-${title}`}
            className="text text-sm sm:text-base mb-2 sm:mb-3 md:mb-4 text-[#1B1F23]/70"
          >
            {tag}
          </h3>
          <h4
            id={`secondary-blog-title-${title}`}
            className="font-medium text-[#1B1F23] text-base sm:text-lg leading-snug sm:leading-[26px] mb-3 sm:mb-4 line-clamp-2 max-w-[600px]"
          >
            {title}
          </h4>
        </div>
        <div className="flex flex-row items-center text-[#1B1F23]/60">
          <p
            className="text-xs sm:text-sm 2xl:text-base"
            id={`secondary-blog-author-${title}`}
          >
            By samir jabib
          </p>
          <span className="mx-2 sm:mx-3">|</span>
          <p
            className="text-xs sm:text-sm 2xl:text-base"
            id={`secondary-blog-date-${title}`}
          >
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
    </article>
  );
};
