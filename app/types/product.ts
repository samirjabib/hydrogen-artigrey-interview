import type { CollectionProductFragment } from 'storefrontapi.generated';

export interface ExtendedProduct extends CollectionProductFragment {
  isBestSeller?: boolean;
}
