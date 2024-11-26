import { defer, type LoaderFunctionArgs } from '@netlify/remix-runtime';
import { COLLECTION_BY_HANDLE_QUERY } from '~/queries/fragments/collection';
import type { CollectionByHandleQuery } from 'storefrontapi.generated';

export async function loader({ params, context }: LoaderFunctionArgs) {
    const { handle } = params;
    const { storefront } = context;

    if (!handle) {
        throw new Error('Collection handle is required');
    }

    try {
        const collection = await storefront.query<CollectionByHandleQuery>(
            COLLECTION_BY_HANDLE_QUERY,
            {
                variables: {
                    handle,
                },
            },
        );

        if (!collection?.collectionByHandle?.id) {
            throw new Error('Collection not found');
        }

        return defer({
            collection,
        });

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Collection not found');
    }
}