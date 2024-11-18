import React from 'react';
import type {BlogsQuery} from '~/queries/blogs';
import {BlogsGrid} from './blog-grid/BlogsGrid';
import {Link} from '@remix-run/react';

type BlogBannerProps = {
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
};

export const BlogsBanner: React.FC<BlogBannerProps> = ({blogs}) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 w-full wrapper mt-12 px-4 md:px-10">
      <div className="flex flex-row justify-between items-center w-full mb-[50px]">
        <div >
          <h4 className="text-base font-normal leading-5 mb-2">✍️ Blogs</h4>
          <h2 className="title">Latest Blogs</h2>
        </div>
        <Link to="/blogs">
          <span className="font-normal text-lg leading-5 underline">
            View All
          </span>
        </Link>
      </div>
      <BlogsGrid blogs={blogs} />
    </section>
  );
};
