import {StarsRating} from './StarRatings';
import {HeaderText} from './HeaderText';
import type {BrandsCardsQuery} from 'storefrontapi.generated';
import {BrandList} from './BrandList';

export const Brands = ({
  brands,
}: {
  brands: BrandsCardsQuery['metaobjects']['edges'];
}) => {
  return (
    <section
      className="bg-[#F6F6F5] py-10 md:py-6"
      aria-labelledby="brands-title"
    >
      <div className="px-4 wrapper md:px-10">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
          <div>
            <h2 id="brands-title" className="sr-only">
              Brands
            </h2>
            <HeaderText
              text="#1 Doctor Recommended"
              className="mb-4"
              aria-hidden="true"
            />
            <StarsRating
              reviews="12,000+ 5-star Reviews"
              aria-label="12,000+ 5-star Reviews"
            />
          </div>
          <BrandList brands={brands} aria-label="Our Brands" />
        </div>
      </div>
    </section>
  );
};
