import { DISCOUNT_DATA } from "../../../constants";

export const QuantityTooltipContent = () => (
    <div className="p-2">
        {/* Header */}
        <div className="justify-between border-b border-gray-200 pb-[6px] flex flex-row gap-3">
            <div className="text-[8px] font-medium leading-[8px] text-[#1B1F23]">Quantity</div>
            <div className="text-[8px] font-medium leading-[8px] text-[#1B1F23]">Discount</div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[6px] pt-[6px]">
            {DISCOUNT_DATA.map((row) => (
                <div key={row.quantity} className="flex justify-between">
                    <div className="text-[8px] font-medium leading-[8px] text-[#30363C]">{row.quantity}</div>
                    <div className="text-[8px] font-medium leading-[8px] text-[#30363C]">{row.discount}</div>
                </div>
            ))}
        </div>
    </div>
);

