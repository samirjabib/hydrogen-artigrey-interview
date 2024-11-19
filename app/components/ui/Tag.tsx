export const Tag = ({tag}: {tag: string}) => {
  return (
    <div className="inline-flex flex-row items-center gap-1 bg-[#F6F6F5] py-[5px] px-[10px] rounded-[4px]">
      <div className="w-1 h-1 bg-[#101226] rounded-full" />
      <span className="text-black text-[10px] leading-3 font-normal">
        {tag}
      </span>
    </div>
  );
};
