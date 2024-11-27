import { tableHead } from '../../constants';
import { ProductVariantTableProps, VariantWithMetaField } from '../../types';
import { TableRow } from './table-row/TableRow';
import { TableHead } from './table-head/TableHead';

export function ProductVariantTable({ variants, cart, selectedSellingPlanId, selectedOption }: ProductVariantTableProps) {
  return (
    <div className="relative overflow-x-scroll md:overflow-x-hidden">
      <table >
        <TableHead headers={tableHead} />
        <tbody>
          {variants.map((variant) => (
            <TableRow key={variant.id} variant={variant as VariantWithMetaField} cart={cart} selectedSellingPlanId={selectedSellingPlanId} selectedOption={selectedOption} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
