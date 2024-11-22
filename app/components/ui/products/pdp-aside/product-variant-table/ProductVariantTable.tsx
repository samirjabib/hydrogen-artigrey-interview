import {TableHead} from './TableHead';
import {TableRow, VariantWithMetaField} from './table-row/TableRow';
import {tableHead} from '../constants';
import { CollectionProductFragment } from 'storefrontapi.generated';

export interface ProductVariant {
  name: string;
  price: string;
  discount: string;
  total: string;
  size: string;
}

interface ProductVariantTableProps {
  variants:CollectionProductFragment['variants']['nodes'] ;
}

export function ProductVariantTable({variants}: ProductVariantTableProps) {
  console.log(variants)
  return (
    <div className="relative overflow-x-scroll">
      <table className="w-full">
        <TableHead headers={tableHead} />
        <tbody>
          {variants.map((variant) => (
            <TableRow key={variant.id} variant={variant as VariantWithMetaField} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
