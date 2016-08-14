import { Injectable } from '@angular/core';

import { PRODUCT_TYPES } from '../product-types/mock-product-types';

@Injectable()
export class ProductTypeService {
    getProductTypes() {
        return Promise.resolve(PRODUCT_TYPES);
    }

    getProductType(id: number) {
        return this.getProductTypes()
            .then(productTypes => productTypes.find(productType => productType.productTypeId === id));
    }

}
