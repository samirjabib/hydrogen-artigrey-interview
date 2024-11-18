import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Heading} from '~/components/ui/Heading';

export const products = [
  {
    id: '1',
    image: 'https://via.placeholder.com/300x400',
    title: 'Omega-3',
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

type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  rating: number;
  tags: string[];
};

type ProductSliderProps = {
  products: Product[];
};

export const TrendingProducts: React.FC<ProductSliderProps> = ({products}) => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-10 bg-[#F6F6F5]">
      <div className="container mx-auto">
        <Heading
          title="Trending Supplements"
          subtitle="COMFORTABLY UNCOMFORTABLE "
        />

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <a
            href="/supplements"
            className="text-sm text-gray-600 hover:underline"
          >
            View All
          </a>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {slidesPerView: 1.5},
            1024: {slidesPerView: 3},
            1280: {slidesPerView: 4},
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                {/* Badge */}
                {product.badge && (
                  <div className="bg-yellow-300 text-xs font-semibold text-black px-2 py-1 rounded-md mb-2 inline-block">
                    {product.badge}
                  </div>
                )}
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* Product Info */}
                <h3 className="text-lg font-medium text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                  <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Add
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
