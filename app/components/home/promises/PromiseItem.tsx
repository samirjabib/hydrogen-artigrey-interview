import {Image} from '@shopify/hydrogen';
import React from 'react';
export const PromiseItem = React.memo(({promise}: {promise: string}) => (
  <div className="flex items-center pr-8">
    <Image
      src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/Star_2.png?v=1731709194"
      width={16}
      height={16}
      alt="star"
      className="flex-shrink-0"
    />
    <span className="text-white ml-4 font-medium">{promise}</span>
  </div>
));

PromiseItem.displayName = 'PromiseItem';
