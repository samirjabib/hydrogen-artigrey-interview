import React from 'react';
import clsx from 'clsx';
import {MainBlogCard} from './MainBlogCard';
import {SecondaryBlogCard} from './SecondaryBlogCard';
import type {BlogBannerProps} from '../types';

export const BlogsGrid: React.FC<BlogBannerProps> = ({blogs, className}) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'w-full flex flex-col lg:flex-row gap-5 min-h-[450px] p-4 lg:p-0',
        className,
      )}
      aria-labelledby="blogs-grid-title"
    >
      <h2 id="blogs-grid-title" className="sr-only">
        Featured Blogs
      </h2>
      <MainBlogCard
        imageSrc={blogs[0].node.image.src}
        title={blogs[0].node.title}
        tag={blogs[0].node.tags[0]}
        publishedAt={blogs[0].node.publishedAt}
        author="Samir Jabib"
      />

      <div
        className="w-full lg:w-1/2 flex flex-col gap-12 md:gap-5"
        role="list"
      >
        {blogs.slice(1, 3).map((blog, index) => (
          <SecondaryBlogCard
            key={blog.node.id}
            imageSrc={blog.node.image.src}
            title={blog.node.title}
            tag={blog.node.tags[0]}
            publishedAt={blog.node.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};
