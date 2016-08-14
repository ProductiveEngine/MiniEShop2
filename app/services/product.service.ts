import { Injectable } from '@angular/core';

import { PRODUCTS } from '../products/mock-products';

@Injectable()
export class ProductService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }

    getProduct(id: number) {
        return this.getProducts()
            .then(products => products.find(product => product.productId === id));
    }

}
