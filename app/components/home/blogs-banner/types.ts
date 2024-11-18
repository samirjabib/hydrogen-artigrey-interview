import type {BlogsQuery} from '~/queries/blogs';

export type BlogCardProps = {
  imageSrc: string;
  tag?: string;
  title: string;
  publishedAt: string;
  author?: string;
  className?: string;
  isMain?: boolean;
};

export type BlogsGridProps = {
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
  className?: string; // Optional, for additional customization
};

export type MainBlogCardProps = {
  imageSrc: string;
  title: string;
  tag: string;
  publishedAt: string;
  author: string;
};

export type BlogBannerProps = {
  blogs: BlogsQuery['blogs']['edges'][0]['node']['articles']['edges'];
  className?: string;
};
