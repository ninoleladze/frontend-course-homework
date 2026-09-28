export interface CartProduct {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string; 
  };
  quantity: number;
}
