import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "~/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "relative z-50 overflow-visible top-2 rounded-md border border-gray-200 bg-white text-sm text-gray-900 drop-shadow-sm",
        "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade",
        "data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade",
        "data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade",
        "data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade",
        "select-none",
        className
      )}
      {...props}
    >
      <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t border-gray-200 bg-white" />

      <div className="relative z-20">
        {props.children}
      </div>
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };