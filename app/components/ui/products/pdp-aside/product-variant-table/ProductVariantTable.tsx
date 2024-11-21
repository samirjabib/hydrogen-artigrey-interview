import {TableHead} from './TableHead';
import {TableRow} from './table-row/TableRow';
import {tableHead} from '../constants';

export interface ProductVariant {
  name: string;
  price: string;
  discount: string;
  total: string;
  size: string;
}

interface ProductVariantTableProps {
  variants: ProductVariant[];
}

export function ProductVariantTable({variants}: ProductVariantTableProps) {
  return (
    <div className="relative overflow-x-scroll">
      <table className="w-full">
        <TableHead headers={tableHead} />
        <tbody>
          {variants.map((variant) => (
            <TableRow key={variant.name} variant={variant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
