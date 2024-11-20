import {cn} from '~/utils/cn';

export const TableHead = ({
  headers,
}: {
  headers: {id: number; name: string}[];
}) => (
  <thead>
    <tr className="border-b border-gray-200">
      {headers.map((item, index) => (
        <th
          key={item.id}
          className={cn(
            'font-medium text-[12px] leading-[14px] text-start pb-4',
            index === 0 ? 'text-start' : 'text-center',
            index === headers.length - 1 ? 'text-end' : 'text-start',
          )}
        >
          {item.name}
        </th>
      ))}
    </tr>
  </thead>
);
