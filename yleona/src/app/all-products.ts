import { Product } from "./product";

export interface AllProducts {
        total: number;
      limit: number;
      page: number;
      skip: number;
      products: Product[];
}
