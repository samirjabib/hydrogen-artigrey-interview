import type { CollectionProductFragment } from 'storefrontapi.generated';
import type { SelectOptions } from './types';
import { useState } from 'react';


export const useSubscription = (
  price: string,
  sellingPlanGroups: CollectionProductFragment['sellingPlanGroups'],
) => {
  const [selectedOption, setSelectedOption] =
    useState<SelectOptions>('subscribe');

  const handleOptionChange = (option: SelectOptions) => {
    setSelectedOption(option);
  };

  const selectFirstSellingPlan =
    sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0];

  const adjustmentPercentage = selectFirstSellingPlan?.priceAdjustments[0]
    ?.adjustmentValue as { adjustmentPercentage: number };

  const parsedPrice = parseFloat(price);

  const discountedPrice =
    parsedPrice -
    (parsedPrice * (adjustmentPercentage?.adjustmentPercentage || 0)) / 100;

  return {
    selectedOption,
    handleOptionChange,
    parsedPrice,
    discountedPrice,
    adjustmentPercentage,
    selectedSellingPlan: selectedOption === 'subscribe' ? selectFirstSellingPlan : null,
  };
};