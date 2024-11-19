import {useAside} from '~/providers/Aside';
import {Icon} from '../ui/Icon';

export const SearchToggle = () => {
  const {open} = useAside();
  return (
    <button
      onClick={() => {
        open('search');
      }}
      aria-label="Open search"
      className="cursor-pointer"
    >
      <Icon name="search" size={30} />
    </button>
  );
};
