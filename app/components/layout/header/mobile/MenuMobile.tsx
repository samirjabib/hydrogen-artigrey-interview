import { NavLink } from '@remix-run/react';
import type { MenuMobileProps } from '../types';
import { HeaderActions } from '../shared/HeaderActions';
import { Menu } from 'lucide-react';
import { useMobileMenuStore } from './mobileMenuStore';

export const MenuMobile = ({ shopName, isLoggedIn, cart }: MenuMobileProps) => {

  const open = useMobileMenuStore((state) => state.open);
  return (
    <nav
      className="flex flex-row justify-between bg-white py-[23px] px-6 rounded-lg"
      role="navigation"
      aria-label="Mobile menu"
    >
      <button
        type="button"
        aria-label="Open menu mobile"
        aria-controls="menu-mobile"
        onClick={open}
      >
        <span className="sr-only">Open menu</span>
        <Menu aria-hidden="true" />
      </button>
      <NavLink prefetch="intent" to="/" end>
        <strong className="font-bold text-xl leading-6">{shopName}</strong>
      </NavLink>

      <HeaderActions isLoggedIn={isLoggedIn} cart={cart} isMobile />
    </nav>
  );
};
