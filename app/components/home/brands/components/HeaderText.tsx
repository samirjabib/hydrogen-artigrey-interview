import {cn} from '~/utils/cn';

export const HeaderText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <h2
    className={cn(
      'text-center border-black border bg-black/10 p-[14px] rounded-lg',
      className,
    )}
    aria-level={2}
  >
    <span className="text-[#1B1F23] text-sm rounded-lg leading-4 font-medium">
      {text}
    </span>
  </h2>
);
