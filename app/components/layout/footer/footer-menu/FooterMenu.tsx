import type {FooterMenuProps, MenuItem} from '../types';
import {MenuColumn} from './MenuColumn';

export function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: FooterMenuProps) {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4 2xl:gap-[60px] pb-16 lg:pb-0">
      {menu?.items.map((item) => {
        if (!item.items?.length) return null;
        return (
          <MenuColumn
            key={item.id}
            title={item.title}
            items={item.items as MenuItem[]}
            primaryDomainUrl={primaryDomainUrl}
            publicStoreDomain={publicStoreDomain}
          />
        );
      })}
    </div>
  );
}
