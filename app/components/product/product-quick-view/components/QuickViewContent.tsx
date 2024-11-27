import { ProductHeader } from './product-variant-table/ProductHeader';
import { ProductVariantTable } from './product-variant-table/ProductVariantTable';
import { CartSummary } from './CartSummary';
import { SubscriptionPlanOptions } from './subscription-plan-options/SubscriptionPlanOptions';
import { QuickViewContentProps } from '../types';
import { AddToCartSection } from './add-to-cart-section/AddToCartSection';
import { useState } from 'react';
import { useQuickViewStore } from '../quickViewStore';

export function QuickViewContent({ product, cart }: QuickViewContentProps) {
  if (!product) {
    return null;
  }
  const selectedSellingPlanId = useQuickViewStore((state) => state.selectedSellingPlanId);
  const [selectedOption, setSelectedOption] = useState(selectedSellingPlanId);


  const { title, description, tags, variants } = product;
  const imageSrc = product.images.edges[0].node.url;
  const imageAlt = product.images.edges[0].node.altText;
  const isProductWithSellingPlanGroups = product.sellingPlanGroups.nodes.length > 0;
  const onOptionChange = () => {
    if (selectedOption === selectedSellingPlanId) {
      setSelectedOption(null);
      return;
    }
    const optionId = product.sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id;
    setSelectedOption(optionId);
  };


  return (
    <section className="w-full">
      <ProductHeader
        title={title}
        subtitle={description}
        reviewCount={120}
        tags={tags}
        imageSrc={imageSrc}
        imageAlt={imageAlt || title}
      />
      <div className="mt-10 relative">
        <ProductVariantTable
          variants={variants.nodes}
          cart={cart}
          selectedSellingPlanId={selectedSellingPlanId}
          selectedOption={selectedOption}
        />
        <CartSummary
          cart={cart}
        />
        {isProductWithSellingPlanGroups && (
          <SubscriptionPlanOptions
            product={product}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
        )}
        <AddToCartSection
          price={39.96}
          cart={cart}
          product={product}
          selectedSellingPlanId={selectedSellingPlanId}
          selectedOption={selectedOption}
        />
      </div>
    </section>
  );
}
