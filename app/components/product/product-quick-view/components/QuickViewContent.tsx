import { ProductHeader } from './product-variant-table/ProductHeader';
import { AddToCartSection } from './AddToCartSection';
import { ProductVariantTable } from './product-variant-table/ProductVariantTable';
import { CartSummary } from './CartSummary';
import { SubscriptionPlanOptions } from './subscription-plan-options/SubscriptionPlanOptions';
import { QuickViewContentProps } from '../types';



export function QuickViewContent({ product, cart }: QuickViewContentProps) {
  if (!product) {
    return null;
  }
  const { title, description, tags, variants } = product;
  const imageSrc = product.images.edges[0].node.url;
  const imageAlt = product.images.edges[0].node.altText;
  const isProductWithVariants = variants.nodes.length > 1;

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
        <CartSummary totalItems={20} subtotal={249.95} cart={cart} />
        {isProductWithVariants && <SubscriptionPlanOptions />}
        <AddToCartSection
          initialQuantity={1}
          price={39.96}
          onQuantityChange={(qty) => console.log(`Quantity changed to: ${qty}`)}
          onAddToCart={() => console.log('Added to cart')}
        />
      </div>
    </section>
  );
}


