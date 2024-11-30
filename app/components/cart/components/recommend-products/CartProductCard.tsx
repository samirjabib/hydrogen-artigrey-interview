import { Image } from '@shopify/hydrogen';
import { Plus } from 'lucide-react';
import { CollectionProductFragment } from 'storefrontapi.generated';
import { AddToCartButton } from '~/components/product/AddToCartButton';
import { ProductPrice } from '~/components/product/ProductPrice';

export type CartProductCardProps = {
    product: CollectionProductFragment
}

export const CartProductCard = ({ product }: CartProductCardProps) => {
    const merchandiseId = product.variants.nodes[0].id;
    return (
        <div className="p-5 bg-[#F6F6F5] rounded-lg flex flex-col">
            <div className="mb-4">
                <Image
                    src={product.images.nodes[0].url}
                    alt={product.title}
                    width={180}
                    height={140}
                    className="object-cover"
                />
            </div>
            <h3 className="font-medium text-xs leading-[18px] mb-4 text-[#1B1F23] h-9 line-clamp-2 overflow-hidden">
                {product.title}
            </h3>
            <div className="flex flex-row items-center justify-between mt-auto">
                <ProductPrice
                    price={product.priceRange.minVariantPrice}
                    className="text-[#1B1F23] font-normal text-sm leading-5"
                />

                <AddToCartButton
                    className="flex items-center bg-[#1B1F23] text-white rounded-lg h-8 px-3"
                    lines={[{
                        merchandiseId,
                        quantity: 1,
                    }]}
                >
                    <button className="flex items-center whitespace-nowrap" type='submit'>
                        <span className="text-xs font-normal">Add to cart</span>
                        <Plus size={13} className="ml-1 flex-shrink-0" />
                    </button>
                </AddToCartButton>

            </div>
        </div>
    );
};
