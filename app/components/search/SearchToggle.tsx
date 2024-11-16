import {Search} from 'lucide-react';
import {useAside} from '~/providers/Aside';

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
      <Search size={16} />
    </button>
  );
};
