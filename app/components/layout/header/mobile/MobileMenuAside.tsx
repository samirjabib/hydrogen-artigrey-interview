import type { RootLayoutProps } from '~/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '~/components/ui/sheet';
import { useMobileMenuStore } from './mobileMenuStore';

import { Link } from '@remix-run/react';
import { Icon } from '~/components/ui/Icon';
import { Separator } from '~/components/ui/separator';

export function MobileMenuAside({
  header,
  publicStoreDomain,
}: {
  header: RootLayoutProps['header'];
  publicStoreDomain: RootLayoutProps['publicStoreDomain'];
}) {
  const isOpen = useMobileMenuStore((state) => state.isOpen);
  const close = useMobileMenuStore((state) => state.close);

  return (
    header.menu &&
    header.shop.primaryDomain?.url && (
      <Sheet open={isOpen} onOpenChange={close}>
        <SheetContent side="left" className="w-10/12 sm:max-w-sm p-0">
          <SheetHeader className="px-4 py-6 border-b">
            <SheetTitle className="text-lg font-semibold">{header.shop.name}</SheetTitle>
          </SheetHeader>
          <div className="px-4 py-6 space-y-4">
            <Link to={`/${publicStoreDomain}`} className="flex items-center space-x-2 hover:text-primary" >
              <span>Home</span>
            </Link>
            <div className="space-y-4">
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">Pages</h3>
              <div className="space-y-2">
                {header.menu.items.map((item) => {
                  const url = item.url?.replace(header.shop.primaryDomain.url, `/${publicStoreDomain}`);
                  return (
                    <Link
                      key={item.id}
                      to={url || '#'}
                      className="flex items-center space-x-2 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <Separator />
          <div className="px-4 py-6 space-y-4">
            <Link to={`/${publicStoreDomain}/cart`} className="flex items-center space-x-2 hover:text-primary">
              <Icon name="bag" className="h-5 w-5" />
              <span>Cart</span>
            </Link>
            <Link to={`/${publicStoreDomain}/account`} className="flex items-center space-x-2 hover:text-primary">
              <Icon name="user" className="h-5 w-5" />
              <span>Account</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    )
  );
}
