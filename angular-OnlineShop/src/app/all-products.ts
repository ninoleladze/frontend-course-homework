import { Product } from './product';

export interface AllProducts {
  total: number;
  limit: number;
  page: number;
  skip: number;
  sortedBy: string;
  sortedDirection: string;
  products: Product[];
}
