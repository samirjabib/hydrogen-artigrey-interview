import { ProductHeader } from './product-variant-table/ProductHeader';
import { ProductVariantTable } from './product-variant-table/ProductVariantTable';
import { CartSummary } from './CartSummary';
import { SubscriptionPlanOptions } from './subscription-plan-options/SubscriptionPlanOptions';
import { QuickViewContentProps } from '../types';
import { AddToCartSection } from './AddToCartSection/AddToCartSection';
import { useState } from 'react';

export function QuickViewContent({ product, cart }: QuickViewContentProps) {
  if (!product) {
    return null;
  }
  const { title, description, tags, variants } = product;
  const imageSrc = product.images.edges[0].node.url;
  const imageAlt = product.images.edges[0].node.altText;
  const isProductWithSellingPlanGroups = product.sellingPlanGroups.nodes.length > 0;

  const [selectedOption, setSelectedOption] = useState("subscription");

  const totalQuantity = cart?.totalQuantity ?? 0;
  const subtotalAmount = cart?.cost?.subtotalAmount?.amount ?? '0';

  const selectedSellingPlanId = selectedOption === "subscription"
    ? product.sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id
    : undefined;

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
        <ProductVariantTable variants={variants.nodes} cart={cart} />
        <CartSummary
          totalItems={totalQuantity}
          subtotal={subtotalAmount}
          cart={cart}
        />
        {isProductWithSellingPlanGroups && (
          <SubscriptionPlanOptions
            product={product}
            selectedOption={selectedOption}
            onOptionChange={setSelectedOption}
          />
        )}
        <AddToCartSection
          price={39.96}
          cart={cart}
          product={product}
          selectedSellingPlanId={selectedSellingPlanId}
        />
      </div>
    </section>
  );
}
