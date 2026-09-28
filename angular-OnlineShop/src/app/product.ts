export interface Product {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  price: {
    current: number;
    beforeDiscount: number;
    discountPercentage: number;
  };
  rating: number;
  stock: number;
  warranty: string;
  brand: string;
  category: {
    _id: string;
    name: string;
  };
}
