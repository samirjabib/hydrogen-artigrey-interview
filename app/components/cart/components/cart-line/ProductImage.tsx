import { Image } from "@shopify/hydrogen";

export const ProductImage = ({ image, title }: { image: any; title: string }) => (
    <div className='flex items-center justify-center shrink-0'>
        <Image
            alt={title}
            className='object-cover'
            data={image}
            height={90}
            loading="lazy"
            width={90}
        />
    </div>
);