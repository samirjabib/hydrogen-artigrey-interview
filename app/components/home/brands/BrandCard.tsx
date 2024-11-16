import {Image} from '@shopify/hydrogen';

export const BrandCard = ({
  imageUrl,
  altText,
}: {
  imageUrl: string;
  altText?: string | null;
}) => {
  console.log(imageUrl);
  return (
    <Image
      src={imageUrl}
      alt={altText || 'Brand Logo'}
      className="h-8 object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
      width={100}
      height={40}
    />
  );
};
