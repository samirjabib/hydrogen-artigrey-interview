import type {BrandsCardsQuery} from 'storefrontapi.generated';
import {StarsRating} from './StarRatings';
import {HeaderText} from './HeaderText';
import {BrandCard} from './BrandCard';

export const Brands = ({
  brands,
}: {
  brands: BrandsCardsQuery['metaobjects']['edges'];
}) => {
  return (
    <div className="w-full py-14 md:py-6 bg-[#F6F6F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-4 ">
          <div>
            <HeaderText text="#1 Doctor Recommended" className="mb-4" />
            <StarsRating reviews="12,000+ 5-star Reviews" />
          </div>

          <div className="flex flex-wrap gap-5 justify-center items-center mb-10 md:mb-0">
            {brands.map(({node}) => {
              return (
                <BrandCard
                  key={node.id}
                  imageUrl={node.fields[1].reference?.image?.url || ''}
                  altText={node.fields[1].reference?.image?.altText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
