import type {navItems} from './constants';

export const NavigationMenu = ({
  items,
  selectedItem,
  onSelectItem,
}: {
  items: typeof navItems;
  selectedItem: {id: number; title: string; handle: string};
  onSelectItem: (item: {id: number; title: string; handle: string}) => void;
}) => (
  <nav>
    <ul className="flex flex-row items-center gap-10">
      {items.map((item) => (
        <li key={item.id} className="border-black/10 text-sm font-normal">
          <button
            onClick={() => onSelectItem(item)}
            className={selectedItem.id === item.id ? 'font-bold' : ''}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);
