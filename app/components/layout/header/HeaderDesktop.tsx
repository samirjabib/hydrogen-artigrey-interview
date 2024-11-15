import {NavLink} from '@remix-run/react';
import {FALLBACK_HEADER_MENU} from './constants';
import type {MenuDesktopProps} from './types';
import clsx from 'clsx';

import {SearchToggle} from '../../shared/search/SearchToggle';
import {HeaderActions} from './HeaderActions';

export const HeaderDesktop = ({
  menu,
  primaryDomainUrl,
  cart,
  shopName,
  publicStoreDomain,
  isLoggedIn,
}: MenuDesktopProps) => {
  return (
    <nav
      className=" flex flex-row justify-between bg-white py-[23px] px-6 rounded-lg"
      role="navigation"
    >
      <NavLink prefetch="intent" to="/" end>
        <strong className="font-bold text-xl leading-6">{shopName}</strong>
      </NavLink>
      <div className="flex flex-row items-center gap-10">
        <SearchToggle />
        {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
          if (!item.url) return null;
          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;

          return (
            <NavLink
              className={({isActive, isPending}) => {
                return clsx(
                  'text-sm',
                  isActive && 'font-bold',
                  isPending && 'text-gray-500',
                );
              }}
              end
              key={item.id}
              // onClick={close}
              prefetch="intent"
              to={url}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <HeaderActions isLoggedIn={isLoggedIn} cart={cart} />
    </nav>
  );
};
