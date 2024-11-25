import { Button } from "~/components/ui/Button"
import { cn } from "~/utils/cn"
import { ButtonQuickViewProps } from "../types";
import { useQuickViewStore } from "../quickViewStore";
import { CartForm } from "@shopify/hydrogen";

export const ButtonQuickView = ({ buttonLabel, isProductWithSellingPlanGroups, product }: ButtonQuickViewProps) => {
    const open = useQuickViewStore((state) => state.open);
    const firstVariant = product?.variants?.nodes[0];


    if (!firstVariant || !product?.handle) {
        return null;
    }

    const handleClick = () => {
        open(product?.handle);
    };



    return (
        <CartForm
            route="/cart"
            action={CartForm.ACTIONS.LinesAdd}
            inputs={{
                lines: [{
                    merchandiseId: firstVariant.id,
                    quantity: 1
                }]
            }}
        >
            <Button
                className={cn(isProductWithSellingPlanGroups ? 'text-sm w-full' : 'font-medium text-[13px] py-[5px] px-4 inline-flex')}
                onClick={handleClick}
            >
                {buttonLabel}
            </Button>
        </CartForm>
    );
}