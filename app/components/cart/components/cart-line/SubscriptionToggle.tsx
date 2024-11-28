import { CartForm } from "@shopify/hydrogen";
import { SubscriptionToggleProps } from "../../types";
import { SubscriptionButton } from "./SubscriptionButton";



export const SubscriptionToggle = ({ line, sellingPlan }: SubscriptionToggleProps) => {
    const { id, merchandise, sellingPlanAllocation } = line;

    const lines = [{
        id,
        merchandiseId: merchandise.id,
        quantity: line.quantity,
        sellingPlanId: sellingPlanAllocation ? null : sellingPlan.id
    }];

    return (
        <div className='flex border border-dashed border-black/20 flex-row items-center py-2 px-4 rounded-[6px] justify-center w-full sm:w-auto gap-2'>
            <CartForm
                route="/cart"
                action={CartForm.ACTIONS.LinesUpdate}
                inputs={{ lines }}
            >
                {(fetcher: any) => {
                    const isLoading = fetcher.state !== 'idle';
                    return (
                        <SubscriptionButton
                            isLoading={isLoading}
                            hasSubscription={!!sellingPlanAllocation}
                        />
                    );
                }}
            </CartForm>
        </div>
    );
};