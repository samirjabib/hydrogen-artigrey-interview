import { Minus, Plus } from "lucide-react";
import { CartLine } from "./CartLineItem";
import { CartLineRemoveButton } from "./CartLineRemoveButton";
import { CartLineUpdateButton } from "./CartLineUpdateButton";
import { QuantityButton } from "~/components/product/product-quick-view/components/AddToCartSection/QuantityButton";

export function CartLineQuantity({ line }: { line: CartLine }) {
    if (!line || typeof line?.quantity === 'undefined') return null;
    const { id: lineId, quantity, isOptimistic } = line;
    const prevQuantity = Math.max(0, quantity - 1);
    const nextQuantity = quantity + 1;


    const renderDecreaseButton = () => (
        <CartLineUpdateButton lines={[{ id: lineId, quantity: prevQuantity }]}>
            <QuantityButton
                disabled={quantity <= 0 || isOptimistic}
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
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-[14px] py-[8px] px-3 border border-black/20 rounded-[6px] justify-center">
                {renderDecreaseButton()}
                <span className="text-[12px] text-[#1B1F23]/70 w-[20px] text-center">
                    {quantity}
                </span>
                {renderIncreaseButton()}
            </div>
        </div>
    );
}