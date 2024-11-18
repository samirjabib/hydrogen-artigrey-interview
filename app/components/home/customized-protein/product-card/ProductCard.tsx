import {Image} from '@shopify/hydrogen';
import type {ProductProps} from '../types';
import {Button} from '~/components/ui/Button';
import {ActiveIngredients} from './ActiveIngredients';
import {ProductFeatures} from './ProductFeatures';

export const ProductCard: React.FC<{product: ProductProps}> = ({product}) => {
  return (
    <div
      className="flex flex-col md:flex-row h-auto px-4 md:px-[120px]"
      role="region"
      aria-labelledby={`product-${product.id}-title`}
    >
      {/* Imagen */}
      <div className="w-full md:max-w-[590px] bg-white border border-black/10 md:rounded-l-lg flex items-center justify-center h-auto">
        <Image
          src={product.image}
          alt={`Product image for ${product.id}`}
          className="object-contain p-4"
          width={350}
          height={350}
        />
      </div>

      {/* Contenido */}
      <div className="w-full md:max-w-[770px] border-black/10 bg-white rounded-r-lg md:rounded-t-lg border-b md:border-t md:border-r">
        {/* Sección de características */}
        <div className="bg-black py-6 md:py-10 px-4 md:px-[56px] md:rounded-tr-lg">
          <h3
            id={`product-${product.id}-title`}
            className="text-center text-white font-medium leading-7 text-lg md:text-2xl mb-4 md:mb-6"
          >
            The Blend
          </h3>
          <ProductFeatures />
        </div>

        {/* Sección de ingredientes activos */}
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
