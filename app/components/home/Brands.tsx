import type {BrandsCardsQuery} from 'storefrontapi.generated';

export const Brands = ({
  brands,
}: {
  brands: BrandsCardsQuery['metaobjects']['edges'];
}) => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Top text */}
          <div className="text-center">
            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              #1 Doctor Recommended
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Star rating */}
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">12,000+ 5-star Reviews</span>
          </div>

          {/* Brand logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {/* Replace these with actual brand logos */}
            <img
              src="/path-to-rolling-stone.png"
              alt="Rolling Stone"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
            <img
              src="/path-to-mens-journal.png"
              alt="Men's Journal"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
            <img
              src="/path-to-la-weekly.png"
              alt="LA Weekly"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
            <img
              src="/path-to-herb.png"
              alt="Herb"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
            <img
              src="/path-to-nyt.png"
              alt="New York Times"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
            <img
              src="/path-to-bbc.png"
              alt="BBC News"
              className="h-8 object-contain grayscale opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
