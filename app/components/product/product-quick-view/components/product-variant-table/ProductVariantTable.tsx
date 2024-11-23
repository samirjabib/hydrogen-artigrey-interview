import { tableHead } from '../../constants';
import { ProductVariantTableProps, VariantWithMetaField } from '../../types';
import { TableRow } from './table-row/TableRow';
import { TableHead } from './TableHead';



export function ProductVariantTable({ variants }: ProductVariantTableProps) {
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
