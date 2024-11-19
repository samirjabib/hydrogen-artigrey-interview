import React, {useState} from 'react';
import {SubscriptionRadio} from '../RadioButton';
import {Button} from '../Button';
import {NavLink} from '@remix-run/react';

export const ProductSubscriptionContent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('oneTime');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="flex flex-col px-5"
      role="radiogroup"
      aria-label="Purchase options"
    >
      <div className="flex md:flex-nowrap gap-2 pb-[10px]">
        <div className="flex flex-row gap-2 bg-[#F6F6F5] py-[10px] px-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 rounded-[4px] border border-[#1B1F23] max-h-[52px]">
          <SubscriptionRadio
            name="purchaseOption"
            value="oneTime"
            isSelected={selectedOption === 'oneTime'}
            onChange={handleOptionChange}
          />
          <div>
            <h3 className="text-[12px] font-normal leading-[14px] text-[#1B1F23] whitespace-nowrap">
              One-Time Purchase
            </h3>
            <p className="text-[12px] font-medium leading-[14px] text-[#1B1F23]">
              $49.95
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-2 bg-[#F6F6F5] py-[10px] px-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 rounded-[4px] border border-[#1B1F23] max-h-[52px]">
          <SubscriptionRadio
            name="purchaseOption"
            value="subscribe"
            isSelected={selectedOption === 'subscribe'}
            onChange={handleOptionChange}
          />
          <div>
            <h3 className="text-[12px] font-normal leading-[14px] text-[#1B1F23] whitespace-nowrap">
              Subscribe & Save
            </h3>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-[12px] font-medium leading-[14px] text-[#1B1F23]">
                $49.95
              </p>
              <span className="text-[#802608] text-[10px] font-medium leading-3">
                Save 10%
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button variant="primary" className="text-sm">
        Add to Cart - $49.95
      </Button>

      <Button variant="ghost" className="text-sm">
        View Full Details
      </Button>
    </div>
  );
};
