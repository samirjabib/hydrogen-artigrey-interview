export const products = [
  {
    id: '1',
    image: 'https://via.placeholder.com/300x400',
    title: 'Omega-3',
    isSubscriptionProduct: true,
    description: 'Supports heart & brain health',
    price: '$49.95',
    badge: 'Bestseller',
    rating: 5,
    tags: ['One-Time', 'Subscription'],
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/300x400',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep',
    price: '$39.95',
    rating: 4.5,
    tags: ['GMO-Free', 'Gluten-Free'],
  },
];

export type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  isSubscriptionProduct?: boolean;
  badge?: string;
  rating: number;
  tags: string[];
};
