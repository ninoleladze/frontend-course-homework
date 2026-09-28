interface CartItem {
  id: string;
  quantity: number;
  product: {
    id: string;
    price: number;
    name: string;
  };
}