import { CollectionByHandleQuery } from "storefrontapi.generated";
import { navItems } from "./constants";



export type BundlesProps = {
    initialBundle: CollectionByHandleQuery['collectionByHandle'];
};

export type NavigationMenuProps = {
    items: typeof navItems;
    selectedItem: { id: number; title: string; handle: string };
    onSelectItem: (item: { id: number; title: string; handle: string }) => void;
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