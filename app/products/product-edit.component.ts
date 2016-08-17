import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../domain-classes/product-type";
import {Product} from "../domain-classes/product";
import {ProductTypeService} from "../services/product-type.service";
import {ProductService} from "../services/product.service";

@Component({
    selector: 'product-edit',
    templateUrl: 'app/products/product-edit.component.html'
})
export class ProductEditComponent {

    product: Product;
    productTypes:ProductType[];
    active = true;

    constructor(private productTypeService: ProductTypeService,
                private productService: ProductService){

        this.createNewProduct();
    }

    editProduct(id: number){
        this.productService.getProduct(id).then(product=> this.product = product);
    }
    //---------------------------------------------------------------------------
    createNewProduct(){
        this.product = new Product();
        this.active = false;

        //This is a temporary workaround while we await a proper form reset feature.
        setTimeout(() => this.active = true, 0);
    }
    hasProductType (product) {
        return product.productTypeId > 0;
    }
    getProductTypes() {
        this.productTypeService.getProductTypes().then(productTypes => this.productTypes = productTypes);
    }
    ngOnInit() {
        this.getProductTypes();
    }
}