import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface SupplementProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  isBestseller?: boolean;
  tags: string[];
  rating?: number;
}

const supplements: SupplementProps[] = [
  {
    id: '1',
    title: 'Omega - 3',
    description: 'Cognitive Health & Foundational Health',
    price: 49.95,
    image: '/images/omega3.png',
    isBestseller: true,
    tags: ['GMO Free'],
    rating: 5,
  },
  {
    id: '2',
    title: 'Magnesium L-Threonate',
    description: 'Enhances the quality of sleep.',
    price: 49.95,
    image: '/images/magnesium.png',
    tags: ['GMO Free', 'Gluten Free'],
    rating: 5,
  },
  {
    id: '3',
    title: 'Grass Fed Whey Protein Isolate Powder',
    description: 'Supports muscle mass and strength',
    price: 49.95,
    image: '/images/whey.png',
    tags: ['GMO Free', 'Vegan', 'Dairy Free'],
    rating: 5,
  },
  {
    id: '4',
    title: 'Complete Sleep Bundle',
    description: 'Deepens sleep cycle for rejuvenated mornings',
    price: 49.95,
    image: '/images/bundle.png',
    isBestseller: true,
    tags: ['Gluten Free', 'Vegan', 'Dairy Free'],
    rating: 5,
  },
];

const SupplementCard = ({supplement}: {supplement: SupplementProps}) => (
  <div className="bg-white rounded-lg p-6 relative">
    {supplement.isBestseller && (
      <span className="absolute top-4 left-4 bg-yellow-100 text-xs px-2 py-1 rounded-full">
        Bestseller
      </span>
    )}

    <div className="mb-4 flex justify-center">
      <img
        src={supplement.image}
        alt={supplement.title}
        className="h-[250px] object-contain"
      />
    </div>

    <div className="flex gap-2 mb-2">
      {supplement.tags.map((tag) => (
        <span key={tag} className="text-xs text-gray-600">
          • {tag}
        </span>
      ))}
    </div>

    <h3 className="text-xl font-semibold mb-1">{supplement.title}</h3>
    <p className="text-gray-600 text-sm mb-3">{supplement.description}</p>

    {supplement.rating && (
      <div className="flex gap-1 mb-3">
        {[...Array(supplement.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
    )}

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <input
          type="radio"
          name={`purchase-${supplement.id}`}
          id={`one-time-${supplement.id}`}
        />
        <label
          htmlFor={`one-time-${supplement.id}`}
          className="flex justify-between w-full"
        >
          <span>One-Time Purchase</span>
          <span>${supplement.price}</span>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="radio"
          name={`purchase-${supplement.id}`}
          id={`subscribe-${supplement.id}`}
        />
        <label
          htmlFor={`subscribe-${supplement.id}`}
          className="flex justify-between w-full"
        >
          <span>Subscribe & Save</span>
          <span>${(supplement.price * 0.9).toFixed(2)} Save 10%</span>
        </label>
      </div>
      <button className="w-full bg-black text-white py-3 rounded-md mt-2">
        Add • ${supplement.price}
      </button>
    </div>
  </div>
);

export default function Supplements() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button className="p-2 border rounded-full">
          <svg
            className="w-6 h-6"
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
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm">⭐ Trending</span>
          </div>
          <h2 className="text-3xl font-bold mb-1">Supplements</h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            View All
          </a>
        </div>
        <button className="p-2 border rounded-full">
          <svg
            className="w-6 h-6"
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

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="supplements-swiper"
      >
        {supplements.map((supplement) => (
          <SwiperSlide key={supplement.id}>
            <SupplementCard supplement={supplement} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
