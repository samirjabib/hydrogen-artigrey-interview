import { CartLine } from "./CartLineItem";
import { CartLineRemoveButton } from "./CartLineRemoveButton";
import { CartLineUpdateButton } from "./CartLineUpdateButton";

export function CartLineQuantity({ line }: { line: CartLine }) {
    if (!line || typeof line?.quantity === 'undefined') return null;
    const { id: lineId, quantity, isOptimistic } = line;
    const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
    const nextQuantity = Number((quantity + 1).toFixed(0));

    return (
        <div className="cart-line-quantity">
            <small>Quantity: {quantity} &nbsp;&nbsp;</small>
            <CartLineUpdateButton lines={[{ id: lineId, quantity: prevQuantity }]}>
                <button
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1 || !!isOptimistic}
                    name="decrease-quantity"
                    value={prevQuantity}
                >
                    <span>&#8722; </span>
                </button>
            </CartLineUpdateButton>
            &nbsp;
            <CartLineUpdateButton lines={[{ id: lineId, quantity: nextQuantity }]}>
                <button
                    aria-label="Increase quantity"
                    name="increase-quantity"
                    value={nextQuantity}
                    disabled={!!isOptimistic}
                >
                    <span>&#43;</span>
                </button>
            </CartLineUpdateButton>
            &nbsp;
            <CartLineRemoveButton lineIds={[lineId]} disabled={!!isOptimistic} />
        </div>
    );
}
