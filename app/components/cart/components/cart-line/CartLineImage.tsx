import { Image } from '@shopify/hydrogen';
import { CartLine } from '@shopify/hydrogen/storefront-api-types';

type CartLineImageProps = {
  image: CartLine['merchandise']['image'];
  title: string;
};

export function CartLineImage({ image, title }: CartLineImageProps) {
  if (!image) return null;

  return (
    <Image
      alt={title}
      aspectRatio="1/1"
      data={image}
      height={100}
      loading="lazy"
      width={100}
    />
  );
}
