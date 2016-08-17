import { Product } from '../domain-classes/product';

export const PRODUCTS: Product[] = [
    {productId: 1, productTypeId: 1, productName: 'Product 1', description: 'product 1 description', stock: 1, price: 2, createdDate: new Date("2016-01-01"), modifiedDate: null},
    {productId: 2, productTypeId: 2, productName: 'Product 2', description: 'product 1 description', stock: 3, price: 4, createdDate: new Date("2017-01-01"), modifiedDate: null},
];

