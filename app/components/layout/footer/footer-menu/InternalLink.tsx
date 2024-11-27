import { NavLink } from '@remix-run/react';

export const InternalLink = ({
  to,
  children,
}: {
  to: string;
  children: string;
}) => (
  <NavLink
    end
    prefetch="intent"
    className={({ isActive }) =>
      `text hover:text-black transition-colors inline-block ${isActive ? 'mock-later-active-footer-link' : ''
      }`
    }
    to={to}
  >
    {children}
  </NavLink>
);
