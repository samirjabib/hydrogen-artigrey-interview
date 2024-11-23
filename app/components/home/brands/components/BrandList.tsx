import type {BrandsCardsQuery} from 'storefrontapi.generated';
import {BrandCard} from './BrandCard';

export const BrandList = ({
  brands,
}: {
  brands: BrandsCardsQuery['metaobjects']['edges'];
}) => {
  return (
    <div
      className="grid grid-cols-3 lg:flex justify-center md:flex-row md:flex-wrap  gap-2 mb-10 md:mb-0 md:pl-[86px] pl-4  sm:border-l border-[#1B1F231A]"
      aria-label="list of brands"
    >
      {brands.map(({node}) => {
        return (
          <BrandCard
            key={node.id}
            imageUrl={node.fields[1].reference?.image?.url || ''}
            altText={node.fields[1].reference?.image?.altText}
            aria-label={node.fields[0].value}
          />
        );
      })}
    </div>
  );
};
