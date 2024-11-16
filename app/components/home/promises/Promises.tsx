import React, {useMemo} from 'react';
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
];

export const Promises = () => {
  const promiseItems = useMemo(
    () =>
      PROMISES.map((promise, index) => (
        <PromiseItem key={`promise-${index}`} promise={promise} />
      )),
    [], // Sin dependencias ya que PROMISES es constante
  );

  return (
    <div className="bg-black w-full h-[50px] overflow-hidden relative flex items-center">
      <div className="flex animate-[marquee_120s_linear_infinite] whitespace-nowrap will-change-transform">
        <div className="flex items-center min-w-fit">{promiseItems}</div>
        <div className="flex items-center min-w-fit">{promiseItems}</div>
      </div>
    </div>
  );
};

export default React.memo(Promises);
