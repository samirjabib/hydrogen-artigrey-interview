import { Image } from '@shopify/hydrogen';
import { StarsRating } from '~/components/design-system/StarRatings';
import { Tag } from '~/components/design-system/Tag';
import { ProductHeaderProps } from '../../types';


export function ProductHeader({
  title,
  subtitle,
  reviewCount = 5,
  tags = [],
  imageSrc,
  imageAlt,
}: ProductHeaderProps) {
  const isTagsAvailable = tags.length > 0;
  return (
    <div className="flex flex-col gap-4">
      {imageSrc && (
        <div className="relative w-full aspect-square">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-base text-gray-600">{subtitle}</p>}
        <div className="flex items-center gap-2">
          <StarsRating size={20} isProductRating />
          {reviewCount > 0 && (
            <span className="text-sm text-gray-500">
              ({reviewCount} reviews)
            </span>
          )}
        </div>
        {isTagsAvailable && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
