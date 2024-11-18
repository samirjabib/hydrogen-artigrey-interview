import {Image} from '@shopify/hydrogen';
import React from 'react';
import {formatDate} from '~/utils/format-date';

type SecondaryBlogCardProps = {
  imageSrc: string;
  title: string;
  tag: string;
  publishedAt: string;
};

export const SecondaryBlogCard: React.FC<SecondaryBlogCardProps> = ({
  imageSrc,
  title,
  tag,
  publishedAt,
}) => {
  return (
    <article
      className="flex flex-col md:flex-row gap-5 h-1/2"
      role="listitem"
      aria-labelledby={`secondary-blog-title-${title}`}
    >
      <div className="w-full md:w-[300px] h-[200px] md:h-[215px] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col md:py-[31px]">
        <h3 id={`secondary-blog-tag-${title}`} className="text mb-3 md:mb-8">
          {tag}
        </h3>
        <h4
          id={`secondary-blog-title-${title}`}
          className="font-medium text-[#1B1F23] text-lg leading-[26px] mb-3 md:mb-8"
        >
          {title}
        </h4>
        <div className="flex flex-row items-center">
          <div>
            <p className="text" id={`secondary-blog-author-${title}`}>
              By samir jabib
            </p>
          </div>
          <span className="text mx-4">|</span>
          <p className="text" id={`secondary-blog-date-${title}`}>
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
    </article>
  );
};
