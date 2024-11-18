import { NavLink } from "@remix-run/react";

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
    className={({isActive}) =>
      `text-gray-600 hover:text-black transition-colors inline-block ${
        isActive ? 'text-black font-semibold' : ''
      }`
    }
    to={to}
  >
    {children}
  </NavLink>
);
