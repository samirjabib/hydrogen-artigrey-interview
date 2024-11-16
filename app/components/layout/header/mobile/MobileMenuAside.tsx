import {Aside} from '~/providers/Aside';
import type {RootLayoutProps} from '~/types';

export function MobileMenuAside({
  header,
  publicStoreDomain,
}: {
  header: RootLayoutProps['header'];
  publicStoreDomain: RootLayoutProps['publicStoreDomain'];
}) {
  return (
    header.menu &&
    header.shop.primaryDomain?.url && (
      <Aside type="menu-mobile" heading="MENU" side="left">
        menu aside
      </Aside>
    )
  );
}
