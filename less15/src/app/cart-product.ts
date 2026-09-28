import { Product } from "./product";

export interface CartProduct {
    "quantity": number,
    "price": number,
    "product": Product
}
