import React, {useState} from 'react';
import {SubscriptionRadio} from '../RadioButton';

export const ProductSubscriptionContent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('oneTime');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="flex flex-col gap-4"
      role="radiogroup"
      aria-label="Purchase options"
    >
      <SubscriptionRadio
        name="purchaseOption"
        label="One-Time Purchase"
        price="$49.95"
        value="oneTime"
        isSelected={selectedOption === 'oneTime'}
        onChange={handleOptionChange}
      />

      <SubscriptionRadio
        name="purchaseOption"
        label="Subscribe & Save"
        price="$39.96"
        value="subscribe"
        saveText="Save 10%"
        isSelected={selectedOption === 'subscribe'}
        onChange={handleOptionChange}
      />
    </div>
  );
};
