import { Image } from '@shopify/hydrogen';
import type { ProductCardProteinProps } from '../../types';
import { Button } from '~/components/ui/Button';
import { ActiveIngredients } from './ActiveIngredients';
import { ProductFeatures } from './ProductFeatures';

export const ProductCardProtein: React.FC<ProductCardProteinProps> = ({ product }) => {
  return (
    <div
      className="flex flex-col xl:flex-row h-auto px-4 md:px-[120px]"
      role="region"
      aria-labelledby={`product-${product.id}-title`}
    >
      <div
        className="w-full xl:max-w-[590px] bg-white 
        border-x border-t rounded-t-lg md:rounded-t-none  md:border md:border-black/10 md:rounded-tl-lg md:rounded-bl-lg flex items-center justify-center h-auto"
      >
        <Image
          src={product.image}
          alt={`Product image for ${product.id}`}
          className="object-contain p-4"
          width={350}
          height={350}
        />
      </div>

      <div
        className="w-full md:max-w-[770px] md:border-l-0 bg-white md:rounded-br-lg
        border-x border-b rounded-b-lg 
        md:rounded-b-none md:rounded-r-lg md:rounded-t-lg 
        md:border-t md:border-r md:border-black/10"
      >
        <div className="bg-black py-6 md:py-10 px-4 md:px-[56px]  md:rounded-t-none md:rounded-tr-lg">
          <h3
            id={`product-${product.id}-title`}
            className="text-center text-white font-medium leading-7 text-lg md:text-2xl mb-4 md:mb-6"
          >
            The Blend
          </h3>
          <ProductFeatures />
        </div>

        <div className="px-[45px] pt-[30px]">
          <h3
            className="font-medium text-base md:text-lg leading-5 text-center mb-4 md:mb-6"
            aria-label="Active Ingredients"
          >
            Active Ingredients
          </h3>
          <ActiveIngredients />
          <div className="w-full pb-10">
            <Button
              className="w-full md:py-4 text-sm md:text-base"
              aria-label="Customize This Blend"
            >
              Customize This Blend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
