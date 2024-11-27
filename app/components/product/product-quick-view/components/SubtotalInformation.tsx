export function SubtotalInformation({ subtotal }: { subtotal: string | undefined }) {
  return (
    <div className="flex flex-col" aria-label="Subtotal Information">
      <span
        className="text-sm text-[#1b1f23] leading-4 font-medium text-end"
        aria-hidden="true"
      >
        ${subtotal ?? 0}
      </span>
      <p
        className="text-end font-medium text-[#424951] text-[10px]"
        aria-live="polite"
      >
        Product Subtotal
      </p>
      <p
        className="text-[10px] leading-3 font-normal text-[#1b1f23]"
        aria-live="polite"
      >
        Taxes & shipping calculated at checkout
      </p>
    </div>
  );
}
