import type { CollectionProductFragment } from 'storefrontapi.generated';
import type { SelectOptions } from './types';
import { useState } from 'react';


export const useSubscription = (
  price: string,
  sellingPlanGroups: CollectionProductFragment['sellingPlanGroups'],
) => {

  const selectedSellingPlanId = sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id;

  const [selectedOption, setSelectedOption] =
    useState<string | null>(selectedSellingPlanId);



  const onOptionChange = () => {
    if (selectedOption === selectedSellingPlanId) {
      setSelectedOption(null);
      return;
    }
    const optionId = sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id;
    setSelectedOption(optionId);
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
    parsedPrice,
    discountedPrice,
    adjustmentPercentage,
    selectedSellingPlan: selectedOption === 'subscribe' ? selectFirstSellingPlan : null,
    onOptionChange
  };
};