import { NavLink } from '@remix-run/react';
import type {
  CollectionProductFragment,
} from 'storefrontapi.generated';
import { Heading } from '~/components/design-system/Heading';
import { useState } from 'react';
import { ProductSlider } from '~/components/design-system/ProductSlider';
import { navItems } from './constants';
import { BundlesProps } from './types';

export const Bundles = ({
  initialBundle,
}: BundlesProps) => {
  const [selectedItem, setSelectedItem] = useState(navItems[0]);
  const [collection, setCollection] = useState(
    initialBundle?.products.edges || [],
  );

  return (
    <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">
      <div className="flex flex-col md:pb-[50px] md:flex-row items-center justify-between w-full">
        <nav>
          <ul className="flex flex-row flex-wrap justify-center py-12 md:py-0 items-center md:justify-start gap-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="border-black/10 text-sm font-normal leading-4 text-[#1B1F23]"
              >
                <button onClick={() => setSelectedItem(item)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row items-center gap-6 pb-8 md:pb-0">
          <NavLink
            to="/bundles/1"
            className="text-lg underline leading-5 font-normal text-[#1B1F23]"
          >
            View All Bundles
          </NavLink>
        </div>
      </div>

      <ProductSlider
        products={collection}
        title="Bundles"
        subtitle="📦 Goals Specific"
        variant="gray"
        headerVariant="default"
        showViewAll={true}
        viewAllLink="/bundles/1"
        viewAllText="View All Bundles"
      />
    </section>
  );
};
