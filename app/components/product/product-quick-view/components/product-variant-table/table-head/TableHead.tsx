import { cn } from '~/utils/cn';
import {
  TooltipProvider,
} from "~/components/ui/tooltip";
import { HeaderItem } from '../../../types';
import { QuantityHeaderContent } from './QuantityHeaderContent';






const HeaderCell = ({
  item,
  index,
  totalColumns
}: {
  item: HeaderItem;
  index: number;
  totalColumns: number;
}) => (
  <th
    key={item.id}
    className={cn(
      'font-medium text-[12px] leading-[14px] text-center pb-5',
      index === 0 ? 'text-start' : 'text-center',
      index === totalColumns - 1 ? 'text-end' : null,
    )}
  >
    {item.name === 'Quantity' ? (
      <QuantityHeaderContent name={item.name} />
    ) : (
      item.name
    )}
  </th>
);

export const TableHead = ({
  headers,
}: {
  headers: HeaderItem[];
}) => (
  <TooltipProvider>
    <thead>
      <tr className="border-b border-gray-200">
        {headers.map((item, index) => (
          <HeaderCell
            key={item.id}
            item={item}
            index={index}
            totalColumns={headers.length}
          />
        ))}
      </tr>
    </thead>
  </TooltipProvider>
);