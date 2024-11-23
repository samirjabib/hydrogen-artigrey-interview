import { PurchaseOption } from "./PurshaseOption";

export function SubscriptionPlanOptions() {
    return (
        <div className="flex-col sm:flex-row bg-[#F6F6F5] p-4 rounded-md flex gap-[10px] mb-5">
            <PurchaseOption
                label="One-Time Purchase"
                price={49.95}
                frequency="Delivery Every 2 Months"
                className="w-full sm:w-1/2"
            />
            <PurchaseOption
                label="Subscribe & Save"
                price={49.95}
                frequency="Delivery Every 2 Months"
                className="w-full sm:w-1/2"
            />
        </div>
    );
}