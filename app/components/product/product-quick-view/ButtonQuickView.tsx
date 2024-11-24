import { Button } from "~/components/ui/Button"
import { cn } from "~/utils/cn"
import { ButtonQuickViewProps } from "./types"
import { useQuickViewStore } from "./quickViewStore"



export const ButtonQuickView = ({ buttonLabel, isProductWithSellingPlanGroups, variants, handle }: ButtonQuickViewProps) => {
    const open = useQuickViewStore((state) => state.open);
    return (
        <Button className={cn(isProductWithSellingPlanGroups ? 'text-sm' : 'font-medium text-[13px] py-[5px] px-4 inline-flex')} onClick={() => open(handle)}>
            {buttonLabel}
        </Button>
    )
}