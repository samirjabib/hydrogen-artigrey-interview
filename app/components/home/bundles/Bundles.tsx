import { ProductSlider } from '~/components/design-system/produc-slider/ProductSlider';
import { NavigationMenu } from './components/NavigationMenu';
import { useBundleNavigation } from './hooks/useBundleNavigation';
import type { BundlesProps } from './types';
import { Heading } from '~/components/design-system/Heading';

export const Bundles = ({ initialBundle, navItems }: BundlesProps) => {
  const {
    selectedItem,
    collection,
    onSelectItem,
    isLoading,
    error
  } = useBundleNavigation({ initialBundle, navItems });

  if (error) {

    return (
      <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">
        <p className="text-red-500">Error loading bundles: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 md:px-10 py-20 wrapper w-full">


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
          onSelectItem={onSelectItem}
          selectedItem={selectedItem}
          title='Bundles'
          subtitle="📦 Goals Specific"
        />
      )}
    </section>
  );
};