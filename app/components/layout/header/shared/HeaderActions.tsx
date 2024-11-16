import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {CartToggle} from '~/components/cart/CartToggle';
import {LogIn} from 'lucide-react';
import type {HeaderActionsProps} from '../types';

export function HeaderActions({isLoggedIn, cart}: HeaderActionsProps) {
  return (
    <nav
      className="flex flex-row items-center gap-x-4"
      role="navigation"
      aria-label="header-actions"
    >
      <NavLink prefetch="intent" to="/account">
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) =>
              isLoggedIn ? (
                'Account'
              ) : (
                <button aria-label="sign-in-button" className="cursor-pointer">
                  <LogIn size={16} />
                </button>
              )
            }
          </Await>
        </Suspense>
      </NavLink>
      <CartToggle cart={cart} />
    </nav>
  );
}
