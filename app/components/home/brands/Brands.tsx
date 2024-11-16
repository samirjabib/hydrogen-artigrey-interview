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
    <div className="w-full py-10 md:py-6 bg-[#F6F6F5] ">
      <div className="px-4 wrapper">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4 ">
          <div>
            <HeaderText text="#1 Doctor Recommended" className="mb-4" />
            <StarsRating reviews="12,000+ 5-star Reviews" />
          </div>
          <BrandList brands={brands} />
        </div>
      </div>
    </div>
  );
};
