import { ProductSlider } from '~/components/design-system/produc-slider/ProductSlider';
import { useBundleNavigation } from './hooks/useBundleNavigation';
import type { BundlesProps } from './types';

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
      <ProductSlider
        isLoading={isLoading}
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
    </section>
  );
};