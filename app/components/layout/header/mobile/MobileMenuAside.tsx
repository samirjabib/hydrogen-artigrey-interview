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
import { Button } from '~/components/ui/Button';
import { Input } from "~/components/ui/input";

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
        <SheetContent side="left" className="w-10/12 sm:max-w-sm p-0 flex flex-col">
          <SheetHeader className="px-6 py-6 border-b">
            <SheetTitle className="text-xl font-bold">{header.shop.name}</SheetTitle>
          </SheetHeader>
          <div className="px-6 pb-5 border-b border-black/10">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 h-12 rounded-lg"
              />
              <Icon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1F23]"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6 space-y-6">
              <Link to='/' className="flex items-center space-x-3 hover:text-primary transition-colors" >
                <span className="font-medium">Home</span>
              </Link>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Pages</h3>
                <div className="space-y-3">
                  {header.menu.items.map((item) => {
                    const url = item.url?.replace(header.shop.primaryDomain.url, `/${publicStoreDomain}`);
                    return (
                      <Link
                        key={item.id}
                        to={url || '#'}
                        className="flex items-center space-x-3 hover:text-primary transition-colors"
                      >
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-6 bg-muted/30 border-t border-black/10">
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full text-sm gap-2 h-12 font-medium text-[#1B1F23] bg-[#E4E4E4] border-none rounded-lg"
              >
                <span>Men</span>
                <div className="bg-background rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                  <Icon name="employer" className="h-4 w-4" />
                </div>
              </Button>
              <Button
                variant="primary"
                className="w-full text-sm h-12 font-medium rounded-lg"
              >
                Take the quiz
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  );
}
