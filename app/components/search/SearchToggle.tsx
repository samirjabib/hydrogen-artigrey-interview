import {useAside} from '~/providers/Aside';
import {Icon} from '../ui/Icons';

export const SearchToggle = () => {
  const {open} = useAside();
  return (
    <button
      onClick={() => {
        open('search');
        console.log('open search');
      }}
      aria-label="Open search"
      className="cursor-pointer"
    >
      <Icon name="search" size={30} />
    </button>
  );
};
