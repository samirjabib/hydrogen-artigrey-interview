import { Image } from '@shopify/hydrogen';
import { Plus } from 'lucide-react';
import { VideoSliceProductCardProps } from '../types';



export const VideoSliceProductCard = ({
  title,
  price,
  imageSrc,
}: VideoSliceProductCardProps) => (
  <div className="py-[5px] bg-white pl-[5px] flex flex-row items-center justify-between pr-4 rounded-lg">
    <div className="flex flex-row items-center justify-start gap-[10px]">
      <div className="rounded-md w-[70px] h-[70px] flex items-center justify-center bg-[#F6F6F5]">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          width={50}
          height={50}
        />
      </div>
      <div>
        <h3 className="font-normal leading-4 text-[13px] text-[#1B1F23] mb-2">
          {title}
        </h3>
        <p className="text-[#1B1F23] text-start text-[12px] leading-4 font-medium">
          {price}
        </p>
      </div>
    </div>
    <div
      className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer"
      aria-label="Add to cart"
      role="button"
    >
      <Plus className="text-white" />
    </div>
  </div>
);
