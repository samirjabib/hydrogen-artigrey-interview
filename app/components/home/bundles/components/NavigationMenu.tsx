import { NavigationMenuProps } from "../types";

export const NavigationMenu = ({
  items,
  selectedItem,
  onSelectItem,
}: NavigationMenuProps) => (
  <nav>
    <ul className="flex flex-row items-center gap-10 flex-wrap justify-center py-8 lg:py-0">
      {items.map((item) => (
        <li
          key={item.id}
          className="relative group border-black/10 text-sm font-normal"
        >
          <button
            onClick={() => onSelectItem(item)}
            className="relative pb-2 transition-colors duration-300"
          >
            {item.title}
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B1F23] transition-transform duration-300 origin-left 
              ${selectedItem.id === item.id
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'}`}
            />
          </button>
        </li>
      ))}
    </ul>
  </nav>
);