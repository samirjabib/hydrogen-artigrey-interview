import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { BundlesProps, NavItemProps } from '../types';
import { useFetcher } from '@remix-run/react';
import { loader } from '~/routes/collections.$handle';

export const useBundleNavigation = ({ initialBundle, navItems }: BundlesProps) => {
    const [selectedItem, setSelectedItem] = useState(navItems[0]);
    const [collection, setCollection] = useState(
        initialBundle?.products.edges || []
    );
    const [error, setError] = useState<Error | null>(null);

    console.log('selectedItem', selectedItem, collection);

    const fetcherKey = useMemo(() => `collection-fetcher-${selectedItem.handle}`, [selectedItem.handle]);
    const fetcher = useFetcher<typeof loader>({
        key: fetcherKey,
    });
    const hasDataRef = useRef(false);

    useEffect(() => {
        if (!hasDataRef.current && selectedItem.handle !== navItems[0].handle) {
            fetcher.load(`/collections/${selectedItem.handle}`);
            hasDataRef.current = true;
        }

        if (selectedItem.handle === navItems[0].handle) {
            setCollection(initialBundle?.products.edges || []);
            hasDataRef.current = false;
        }
    }, [selectedItem.handle, initialBundle, navItems]);

    useEffect(() => {
        if (fetcher.data?.collection?.collectionByHandle) {
            setCollection(fetcher.data.collection.collectionByHandle.products.edges || []);
            setError(null);
        }
    }, [fetcher.data]);

    const onSelectItem = useCallback((item: NavItemProps) => {
        setSelectedItem(item);
        hasDataRef.current = false;
    }, []);

    return {
        selectedItem,
        collection,
        onSelectItem,
        isLoading: fetcher.state === 'loading',
        error,
    };
};