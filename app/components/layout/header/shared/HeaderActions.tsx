import { Await, NavLink } from '@remix-run/react';
import { Suspense } from 'react';
import { CartToggle } from '~/components/cart/components/CartToggle';
import type { HeaderActionsProps } from '../types';
import { Button } from '~/components/ui/Button';
import { Icon } from '~/components/ui/Icon';
import { SearchToggle } from '~/components/search/SearchToggle';

export function HeaderActions({
  isLoggedIn,
  cart,
  isMobile = false,
}: HeaderActionsProps) {
  if (isMobile) {
    return (
      <nav
        className="flex flex-row items-center gap-x-4 justify-center"
        role="navigation"
        aria-label="header-actions"
      >
        <SearchToggle />
        <CartToggle cart={cart} />
      </nav>
    );
  }

  return (
    <nav
      className="flex flex-row items-center gap-7"
      role="navigation"
      aria-label="header-actions"
    >
      <div className="space-x-1">
        <Button variant="terciary" className="gap-2 px-4 py-2">
          <span>Men</span>
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <Icon name="employer" size={16} />
          </div>
        </Button>
        <Button variant="primary">Take the quiz</Button>
      </div>

      <div className="space-x-4">
        <NavLink prefetch="intent" to="/account">
          <Suspense fallback="Sign in">
            <Await resolve={isLoggedIn} errorElement="Sign in">
              {(isLoggedIn) =>
                isLoggedIn ? (
                  'Account'
                ) : (
                  <button
                    aria-label="sign-in-button"
                    className="cursor-pointer"
                  >
                    <Icon name="user" size={30} />
                  </button>
                )
              }
            </Await>
          </Suspense>
        </NavLink>
        <CartToggle cart={cart} />
      </div>
    </nav>
  );
}
