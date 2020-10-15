import { ProductStatus } from "../models/ProductStatus";

export interface Product{
    id: number;
    description: string;
    amount: string;
    price: string;
    status: ProductStatus; 
}