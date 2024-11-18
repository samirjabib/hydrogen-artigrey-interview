import React from 'react';
import {PromiseItem} from './PromiseItem';

const PROMISES = [
  'High Quality Ingredients',
  'Independently Certified',
  'Expert Driven',
  'Shipped Internationally',
  'Premium Selection',
  'Sustainable Sourcing',
  'Eco-Friendly Packaging',
  'Customer Satisfaction Guaranteed',
  'Fast Global Delivery',
  'Quality Assurance',
  'Ethically Sourced',
  'Professional Support',
] as const;

export const Promises = () => (
  <section
    aria-label="Promises"
    className="bg-black w-full overflow-hidden relative flex items-center py-4"
  >
    <div className="flex animate-[marquee_120s_linear_infinite] whitespace-nowrap will-change-transform">
      {PROMISES.map((promise) => (
        <PromiseItem key={promise} promise={promise} />
      ))}
    </div>
  </section>
);
