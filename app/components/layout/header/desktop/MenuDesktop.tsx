import {NavLink} from '@remix-run/react';
import type {MenuDesktopProps} from '../types';

import {SearchToggle} from '../../../search/SearchToggle';
import {HeaderActions} from '../shared/HeaderActions';
import {MenuItems} from '../shared/MenuItems';

export const MenuDesktop = ({
  menu,
  primaryDomainUrl,
  cart,
  shopName,
  publicStoreDomain,
  isLoggedIn,
}: MenuDesktopProps) => {
  return (
    <nav
      className="flex flex-row justify-between bg-white py-3 px-6 rounded-lg items-center"
      role="navigation"
      aria-label="Main menu"
    >
      <NavLink prefetch="intent" to="/" end>
        <strong className="font-bold text-xl leading-6 uppercase sr-only">
          {shopName}
        </strong>
        <span aria-hidden="true">{shopName}</span>
      </NavLink>
      <div className="flex flex-row items-center gap-10">
        <SearchToggle aria-label="Toggle search" />
        <MenuItems
          menu={menu}
          primaryDomainUrl={primaryDomainUrl}
          publicStoreDomain={publicStoreDomain}
          aria-label="Main menu"
        />
      </div>
      <HeaderActions
        isLoggedIn={isLoggedIn}
        cart={cart}
        aria-label="Header actions"
      />
    </nav>
  );
};
