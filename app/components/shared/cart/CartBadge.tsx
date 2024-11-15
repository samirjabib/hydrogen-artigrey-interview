import type {CartViewPayload} from '@shopify/hydrogen';
import {useAnalytics} from '@shopify/hydrogen';
import {useAside} from '~/providers/Aside';

export function CartBadge({count}: {count: number | null}) {
  return (
    <div className="absolute top-[-4px] right-[-8px] h-full w-[1px] bg-black text-white flex items-center justify-center rounded-lg p-2">
      <span className="text-[12px]">{count}</span>
    </div>
  );
}
