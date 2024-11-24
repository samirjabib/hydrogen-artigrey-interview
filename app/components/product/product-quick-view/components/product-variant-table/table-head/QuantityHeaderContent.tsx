import { icons } from "public";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "~/components/ui/tooltip";
import { QuantityTooltipContent } from "./QuantityToolTipContent";

export const QuantityHeaderContent = ({ name }: { name: string }) => (
    <Tooltip>
        <TooltipTrigger asChild className="flex flex-row items-center justify-center">
            <span className="cursor-help flex items-center gap-1">
                {name}
                <img src={icons.quantity} alt="Quantity Info" className="w-3 h-3" />
            </span>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center" className="px-[6px] min-w-24">
            <QuantityTooltipContent />
        </TooltipContent>
    </Tooltip>
);