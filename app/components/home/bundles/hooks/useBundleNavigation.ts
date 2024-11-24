import { useState, useCallback } from 'react';
import type { CollectionByHandleQuery } from 'storefrontapi.generated';
import { navItems } from '../constants';
import { BundlesProps } from '../types';

export const useBundleNavigation = ({ initialBundle }: BundlesProps) => {
    const [selectedItem, setSelectedItem] = useState(navItems[0]);
    const [collection, setCollection] = useState(
        initialBundle?.products.edges || []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleItemSelect = useCallback((item: typeof navItems[0]) => {
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
        handleItemSelect,
        isLoading,
        error,
    };
};