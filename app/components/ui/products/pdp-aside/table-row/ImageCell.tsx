import {Image} from '@shopify/hydrogen';

export const ImageCell = ({name, size}: {name: string; size: string}) => (
  <td className="pt-4">
    <div className="flex flex-row gap-3">
      <div className="border rounded-md border-[#D0D0D0] flex items-center justify-center w-11 h-11">
        <Image
          src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/omega-3_31e57120-b358-4641-8494-2e98458b24d7.png?v=1732035059"
          alt="image"
          width={25}
          height={25}
        />
      </div>
      <div className="flex flex-col pt-1">
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
