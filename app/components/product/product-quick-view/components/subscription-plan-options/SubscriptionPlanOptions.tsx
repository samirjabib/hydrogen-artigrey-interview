import { ProductQuery } from "storefrontapi.generated";
import { PurchaseOption } from "../PurshaseOption";
import { SubscriptionPlanOptionsProps } from "../../types";

export function SubscriptionPlanOptions({
    product,
    selectedOption,
    onOptionChange
}: SubscriptionPlanOptionsProps) {
    const handleOptionSelect = (option: string) => {
        onOptionChange(option);
    };

    return (
        <div className="flex-col sm:flex-row bg-[#F6F6F5] p-4 rounded-md flex gap-[10px] mb-5" >
            <PurchaseOption
                label="One-Time Purchase"
                price={49.95}
                frequency="Delivery Every 2 Months"
                className="w-full sm:w-1/2"
                isSelected={selectedOption === "onetime"}
                onHandleSelect={() => handleOptionSelect("onetime")}
            />
            <PurchaseOption
                label="Subscribe & Save"
                price={49.95}
                frequency="Delivery Every 2 Months"
                className="w-full sm:w-1/2"
                isSelected={selectedOption === "subscription"}
                onHandleSelect={() => handleOptionSelect("subscription")}
            />
        </div>
    );
}