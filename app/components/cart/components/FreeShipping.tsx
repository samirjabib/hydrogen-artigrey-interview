import { Progress } from "~/components/ui/progress";

interface FreeShippingProps {
    total: string;
}

export const FreeShipping = ({ total }: FreeShippingProps) => {
    const FREE_SHIPPING_THRESHOLD = 80;
    const currentTotal = parseFloat(total);
    const progress = Math.min((currentTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const remaining = FREE_SHIPPING_THRESHOLD - currentTotal;

    if (currentTotal >= FREE_SHIPPING_THRESHOLD) {
        return (
            <div className="py-6">
                <p className="font-normal leading-5 text-base text-center text-[#1B1F23]">
                    Congratulations! You're eligible for free shipping!
                </p>
            </div>
        );
    }

    return (
        <div className="py-6">
            <p className="font-normal leading-5 text-base text-center text-[#1B1F23] mb-2">
                You are <strong className="font-medium">${remaining.toFixed(2)}</strong> away from eligible for free shipping
            </p>
            <div className="flex flex-row items-center gap-4">
                <p className="text-sm leading-4 text-[#1B1F23]">${currentTotal.toFixed(2)}</p>
                <Progress value={progress} className="h-1" />
                <p className="text-sm leading-4 text-[#1B1F23]">${FREE_SHIPPING_THRESHOLD}</p>
            </div>
        </div>
    );
};