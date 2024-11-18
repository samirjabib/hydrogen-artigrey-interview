import {Image} from '@shopify/hydrogen';

export const BrandCard = ({
  imageUrl,
  altText,
}: {
  imageUrl: string;
  altText?: string | null;
}) => {
  return (
    <Image
      src={imageUrl}
      alt={altText || 'Brand Logo'}
      className="object-contain"
      width={120}
      height={90}
      aria-label={altText || 'Brand Logo'}
    />
  );
};
