import { ProductSlider } from '~/components/design-system/produc-slider/ProductSlider';
import { NavigationMenu } from './components/NavigationMenu';
import { useBundleNavigation } from './hooks/useBundleNavigation';
import { navItems } from './constants';
import type { BundlesProps } from './types';
import { Heading } from '~/components/design-system/Heading';

export const Bundles = ({ initialBundle }: BundlesProps) => {
  const {
    selectedItem,
    collection,
    handleItemSelect,
    isLoading,
    error
  } = useBundleNavigation({ initialBundle });

  if (error) {

    return (
      <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">
        <p className="text-red-500">Error loading bundles: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">
      <Heading subtitle="📦 Goals Specific"
        title="Bundles"
      />

      <div className="flex flex-col md:pb-[50px] md:flex-row items-center justify-between w-full">
        <NavigationMenu
          items={navItems}
          selectedItem={selectedItem}
          onSelectItem={handleItemSelect}
        />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <p>Loading bundles...</p>
        </div>
      ) : (
        <ProductSlider
          products={collection}
          variant="gray"
          headerVariant="default"
          showViewAll={true}
          viewAllLink={`/bundles/${selectedItem.handle}`}
          viewAllText="View All Bundles"
        />
      )}
    </section>
  );
};