import { type FetcherWithComponents } from '@remix-run/react';
import { CartForm, type OptimisticCartLineInput } from '@shopify/hydrogen';
import { cn } from '~/utils/cn';

export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
  className,
}: {
  analytics?: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  lines: Array<OptimisticCartLineInput>;
  onClick?: () => void;
}) {
  return (
    <CartForm route="/cart" inputs={{ lines }} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <div className={cn(className, fetcher && fetcher.state === 'submitting' ? 'opacity-50' : '')}>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />

          {children}
        </div>
      )}
    </CartForm>
  );
}
