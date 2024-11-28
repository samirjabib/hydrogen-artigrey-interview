import { RotateCw } from "lucide-react";
import { SubscriptionButtonProps } from "../../types";

export const SubscriptionButton = ({ isLoading, hasSubscription }: SubscriptionButtonProps) => (
  <button
    type="submit"
    disabled={isLoading}
    className={`text-xs leading-4 font-normal whitespace-nowrap transition-colors flex items-center gap-2 ${isLoading
      ? 'text-[#1B1F23]/40 cursor-not-allowed'
      : 'text-[#1B1F23]/70 hover:text-[#1B1F23]'
      }`}
  >
    {isLoading ? (
      <>
        <RotateCw size={12} className="animate-spin" />
        <span>Updating...</span>
      </>
    ) : (
      hasSubscription ? (
        <>
          <RotateCw size={12} className="mr-1" />
          <span>Switch to One-Time Purchase</span>
        </>
      ) : (
        <>
          <RotateCw size={12} className="mr-1" />
          <span>Subscribe & Save 10%</span>
        </>
      )
    )}
  </button>
);