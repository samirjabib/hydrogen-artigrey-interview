import {NavLink} from '@remix-run/react';
import type {MenuMobileProps} from '../types';
import {HeaderActions} from '../shared/HeaderActions';
import {Menu} from 'lucide-react';
import {useAside} from '~/providers/Aside';

export const HeaderMobile = ({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
  shopName,
  isLoggedIn,
  cart,
}: MenuMobileProps) => {
  const {open} = useAside();
  return (
    <nav
      className=" flex flex-row justify-between bg-white py-[23px] px-6 rounded-lg"
      role="navigation"
    >
      <button
        type="button"
        aria-label="Open menu mobile"
        onClick={() => {
          open('search');
          console.log('open search');
        }}
      >
        {' '}
        <Menu />
      </button>
      <NavLink prefetch="intent" to="/" end>
        <strong className="font-bold text-xl leading-6">{shopName}</strong>
      </NavLink>

      <HeaderActions isLoggedIn={isLoggedIn} cart={cart} />
    </nav>
  );
};
