import { DiscountRow } from "./types";

export const tableHead = [
  {
    id: 1,
    name: 'Variant',
  },
  {
    id: 2,
    name: 'Quantity',
  },
  {
    id: 3,
    name: 'Price',
  },
  {
    id: 4,
    name: 'Discount',
  },
  {
    id: 5,
    name: 'Total',
  },
];


export const DISCOUNT_DATA: DiscountRow[] = [
  { quantity: '0-5', discount: '0%' },
  { quantity: '5-10', discount: '5%' },
  { quantity: '10-15', discount: '10%' },
  { quantity: '15-20', discount: '15%' },
];
