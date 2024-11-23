import {cn} from '~/utils/cn';

type TagsVariants = 'gray' | 'white';
export const Tag = ({
  tag,
  variant = 'gray',
}: {
  tag: string;
  variant?: TagsVariants;
}) => {
  return (
    <div
      className={cn(
        'inline-flex flex-row items-center gap-1  py-[5px] px-[10px] rounded-[4px]',
        {
          'bg-white': variant === 'white',
          'bg-[#F6F6F5]': variant === 'gray',
        },
      )}
    >
      <div className="w-1 h-1 bg-[#101226] rounded-full" />
      <span className="text-black text-[10px] leading-3 font-normal">
        {tag}
      </span>
    </div>
  );
};
