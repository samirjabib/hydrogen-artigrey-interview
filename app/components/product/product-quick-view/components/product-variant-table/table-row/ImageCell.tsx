import { Image } from '@shopify/hydrogen';

export const ImageCell = ({ name, size, imageSrc }: { name: string; size: string, imageSrc: string }) => (
  <td className="pt-4">
    <div className="flex flex-row gap-3">
      <div className="border rounded-md border-[#D0D0D0] flex items-center justify-center w-11 h-11">
        <Image
          src={imageSrc}
          alt="image"
          width={25}
          height={25}
        />
      </div>
      <div className="flex flex-col pt-2">
        <h4 className="text-[10px] leading-3 text-[#1B1F23] font-semibold">
          {name}
        </h4>
        <p className="text-normal text-[10px] leading-3 whitespace-nowrap">
          {size}
        </p>
      </div>
    </div>
  </td>
);
