import {cn} from '~/utils/cn';

export const HeaderText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <div
    className={cn(
      'text-center border-black border bg-black/10 p-[14px] rounded-lg',
      className,
    )}
  >
    <span className="text-gray-800 text-sm rounded-lg leading-4 font-medium">
      {text}
    </span>
  </div>
);
