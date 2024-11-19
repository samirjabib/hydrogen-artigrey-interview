import type {CollectionProductFragment} from 'storefrontapi.generated';
import {Button} from '../Button';
import {StarsRating} from '../StarRatings';
import {Tag} from '../Tag';
import {cn} from '~/utils/cn';
import {Image} from '@shopify/hydrogen';

export const ProductContent = ({
  product: {
    title,
    description,
    priceRange: {
      minVariantPrice: {amount: price},
    },
    tags,
    images,
  },
}: {
  product: CollectionProductFragment;
}) => {
  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-center pb-[42px] relative mb-4',
        )}
      >
        <Image
          src={images.nodes[0].url}
          height={300}
          width={300}
          className="object-contain"
        />
        {/* <div className='absolute top-0 left-0'>
          <div>
            <span>Best Seller</span>
          </div>
        </div> */}
        <div className="absolute bottom-0 left-0">
          <div className="px-4 flex flex-row items-center gap-1">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-5">
        <h3 className="text font-medium text-[#1B1F23] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h3>
        <p className="text-[13px] leading-4 text-[#1B1F23B2] mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {description}
        </p>
        <div className="flex flex-row items-center justify-between pb-5">
          <StarsRating isProductRating />
          <Button className="font-medium text-[13px] py-[5px] px-4 inline-flex">
            Add • ${price}
          </Button>
        </div>
      </div>
    </div>
  );
};
