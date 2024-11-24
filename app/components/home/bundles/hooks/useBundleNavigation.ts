import { useState, useCallback } from 'react';
import { BundlesProps, NavItemProps } from '../types';

/**
 * Hook to manage the navigation of bundles and their corresponding collections
 *
 * @param {BundlesProps} props - The props of the hook
 * @param {CollectionByHandleQuery['collectionByHandle']} props.initialBundle - The initial
 * collection to be used as the first bundle
 * @param {NavItemProps[]} props.navItems - The navigation items to be used in the bundle navigation
 * @returns {Object} An object containing the state and the functions to navigate between bundles
 * @returns {NavItemProps} selectedItem - The currently selected navigation item
 * @returns {CollectionByHandleQuery['collectionByHandle']['products']['edges']} collection - The current collection of products
 * @returns {(item: NavItemProps) => void} onSelectItem - The function to select a new navigation item
 * @returns {boolean} isLoading - If the hook is currently loading a new collection
 * @returns {Error | null} error - The error that occurred while loading the collection
 */
export const useBundleNavigation = ({ initialBundle, navItems }: BundlesProps) => {
    const [selectedItem, setSelectedItem] = useState(navItems[0]);
    const [collection, setCollection] = useState(
        initialBundle?.products.edges || []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const onSelectItem = useCallback((item: NavItemProps) => {
        setIsLoading(true);
        setError(null);
        try {
            // Here you would implement the logic to fetch the new bundle data
            // based on the selected item's handle
            setSelectedItem(item);
            // For now, we'll just use the initial bundle
            setCollection(initialBundle?.products.edges || []);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to load bundle'));
        } finally {
            setIsLoading(false);
        }
    }, [initialBundle]);

    return {
        selectedItem,
        collection,
        onSelectItem,
        isLoading,
        error,
    };
};