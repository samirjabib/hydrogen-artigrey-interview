export function TotalItems({totalItems}: {totalItems: number}) {
  return (
    <div className="flex flex-col items-center" aria-label="Total Items">
      <span
        className="text-xs sm:text-sm text-[#1b1f23] leading-[14px] font-normal mb-0.5 sm:mb-1"
        aria-hidden="true"
      >
        {totalItems}
      </span>
      <p className="leading-3 font-normal text-[9px] sm:text-[10px]" aria-live="polite">
        Total items
      </p>
    </div>
  );
}
