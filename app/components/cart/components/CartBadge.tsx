

export function CartBadge({ count }: { count: number | null }) {
  return (
    <div className="absolute top-[2px] h-1 right-[0px]  w-[1px] bg-black text-white flex items-center justify-center rounded-lg p-2">
      <span className="text-[12px]">{count}</span>
    </div>
  );
}
