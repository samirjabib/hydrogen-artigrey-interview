import {NavLink} from '@remix-run/react';
import type {MenuItemsProps} from '../types';
import {getUrl} from '../utils';
import {FALLBACK_HEADER_MENU} from '../constants';
import clsx from 'clsx';

export const MenuItems = ({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: MenuItemsProps) => {
  return (menu || FALLBACK_HEADER_MENU).items.map((item) => {
    if (!item.url) return null;
    const url = getUrl(item.url, primaryDomainUrl, publicStoreDomain);
    return (
      <NavLink
        className={({isActive, isPending}) =>
          clsx('text-sm', {
            'font-bold': isActive,
            'text-gray-500': isPending,
          })
        }
        end
        key={item.id}
        prefetch="intent"
        to={url}
      >
        {item.title}
      </NavLink>
    );
  });
};
