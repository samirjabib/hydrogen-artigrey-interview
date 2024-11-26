import { CartForm } from "@shopify/hydrogen";

export function CartLineRemoveButton({
    lineIds,
    disabled,
}: {
    lineIds: string[];
    disabled: boolean;
}) {
    return (
        <CartForm
            route="/cart"
            action={CartForm.ACTIONS.LinesRemove}
            inputs={{ lineIds }}
        >
            <button disabled={disabled} type="submit">
                Remove
            </button>
        </CartForm>
    );
}