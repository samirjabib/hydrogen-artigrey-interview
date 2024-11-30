import { CartLineUpdateButton } from "./CartLineUpdateButton";
import { QuantityButton } from "~/components/product/product-quick-view/components/add-to-cart-section/QuantityButton";
import { CartLineProps } from "../../types";
import { cn } from "~/utils/cn";

export function CartLineQuantity({ line }: { line: CartLineProps }) {
    if (!line || typeof line?.quantity === 'undefined') return null;
    const { id: lineId, quantity, isOptimistic } = line;
    const prevQuantity = Math.max(0, quantity - 1);
    const nextQuantity = quantity + 1;

    const disabled = quantity <= 0 || !!isOptimistic;


    const renderDecreaseButton = () => (
        <CartLineUpdateButton lines={[{ id: lineId, quantity: prevQuantity }]}>
            <QuantityButton
                disabled={disabled}
                ariaLabel="Decrease quantity"
                icon="minus"
                size={12}
            />
        </CartLineUpdateButton>
    );

    const renderIncreaseButton = () => (
        <CartLineUpdateButton lines={[{ id: lineId, quantity: nextQuantity }]}>
            <QuantityButton
                disabled={isOptimistic}
                ariaLabel="Increase quantity"
                icon="plus"
                size={12}
            />
        </CartLineUpdateButton>
    );

    return (
        <div className="flex items-center gap-2 w-full" >
            <div className={cn("flex items-center gap-[14px] py-[8px] px-3 border border-black/20 rounded-[6px] justify-center",
                disabled && "cursor-not-allowed bg-red-500"
            )}>
                {renderDecreaseButton()}
                <span className="text-[12px] text-[#1B1F23]/70 w-[20px] text-center">
                    {quantity}
                </span>
                {renderIncreaseButton()}
            </div>
        </div>
    );
}