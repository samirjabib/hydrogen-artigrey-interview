import { Image } from '@shopify/hydrogen';
import React from 'react';
import { cn } from '~/utils/cn';

export const icons = [
  {
    name: 'user',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/icon-user.png?v=1731734264',
    alt: 'User Icon',
  },
  {
    name: 'bag',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/icon-bag.png?v=1731734264',
    alt: 'Bag Icon',
  },
  {
    name: 'employer',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/icon-employer.png?v=1731734264',
    alt: 'Cart Icon',
  },
  {
    name: 'search',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/search.png?v=1731736138',
    alt: 'Search Icon',
  },
  {
    name: 'arrow',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/arrow-goals.png?v=1731709282',
    alt: 'Arrow Icon',
  },
  {
    name: 'like',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/todo.png?v=1731742189',
    alt: 'Like Icon',
  },
  {
    name: 'sheets',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/sheets.png?v=1731742190',
    alt: 'Sheets Icon',
  },
  {
    name: 'diet',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/diet.png?v=1731742190',
    alt: 'Diet Icon',
  },
  {
    name: 'todo',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/todo.png?v=1731742189',
    alt: 'Todo Icon',
  },
  {
    name: 'heart',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/heart.png?v=1732926951',
    alt: 'Heart Icon',
  },
  {
    name: 'instagram',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/instagram.png?v=1732926951',
    alt: 'Instagram Icon',
  },
  {
    name: 'facebook',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/facebook.png?v=1732926951',
    alt: 'Facebook Icon',
  },
  {
    name: 'twitter',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/twitter.png?v=1732926951',
    alt: 'Twitter Icon',
  },
  {
    name: 'youtube',
    path: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/youtube.png?v=1732926951',
    alt: 'Youtube Icon',
  },


] as const;

export type IconName = (typeof icons)[number]['name'];

export const Icon = React.memo(({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) => {
  const icon = React.useMemo(() => icons.find((icon) => icon.name === name), [name]);

  if (!icon) {
    return null;
  }

  return (
    <Image
      src={icon.path}
      alt={icon.alt}
      width={size}
      height={size}
      className={cn('object-contain', className)}
    />
  );
});
