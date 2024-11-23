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
      className="flex flex-col md:flex-row gap-5 h-auto md:h-[215px]"
      role="listitem"
      aria-labelledby={`secondary-blog-title-${title}`}
    >
      <div className="w-full md:w-[300px] h-[200px] md:h-full overflow-hidden rounded-lg shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-2 md:py-[31px]">
        <div>
          <h3 id={`secondary-blog-tag-${title}`} className="text mb-2 md:mb-4">
            {tag}
          </h3>
          <h4
            id={`secondary-blog-title-${title}`}
            className="font-medium text-[#1B1F23] text-lg leading-[26px] mb-3 md:mb-4 line-clamp-2"
          >
            {title}
          </h4>
        </div>
        <div className="flex flex-row items-center text-sm text-gray-500">
          <p className="text text-[14px] 2xl:text-base" id={`secondary-blog-author-${title}`}>
            By samir jabib
          </p>
          <span className="text text-[14px] 2xl:text-base mx-2 md:mx-3">|</span>
          <p className="text text-[14px]  2xl:text-base" id={`secondary-blog-date-${title}`}>
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
    </article>
  );
};
