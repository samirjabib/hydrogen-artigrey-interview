import type { RootLayoutProps } from '~/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '~/components/ui/sheet';
import { useMobileMenuStore } from './mobileMenuStore';

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
        <SheetContent side="left" className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  );
}
