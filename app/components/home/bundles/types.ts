import { CollectionByHandleQuery } from "storefrontapi.generated";
import { navItems } from "./constants";

export type NavItemProps = {
    id: number;
    title: string;
    handle: string;
};

export type BundlesProps = {
    initialBundle: CollectionByHandleQuery['collectionByHandle'];
    navItems: typeof navItems
};

export type NavigationMenuProps = {
    items: NavItemProps[];
    selectedItem: { id: number; title: string; handle: string };
    onSelectItem: (item: NavItemProps) => void;
};

export type SwiperControlsProps = {
    swiperRef: React.RefObject<any>;
    isBeginning: boolean;
    isEnd: boolean;
}

export type NavigationItemProps = {
    item: typeof navItems[0];
    isSelected: boolean;
    onSelect: (item: typeof navItems[0]) => void;
};

export type BundleNavigationProps = {
    items: typeof navItems;
    selectedItem: typeof navItems[0];
    onItemSelect: (item: typeof navItems[0]) => void;
}