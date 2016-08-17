import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

import {Product} from "../domain-classes/product";
import {ProductService} from "../services/product.service";
import {ProductTypesComponent} from "../product-types/product-types.component";
import {ProductEditComponent} from "./product-edit.component";
import {error} from "util";
import {ProductTypeService} from "../services/product-type.service";


@Component({
    selector: 'products',
    templateUrl: 'app/products/products.component.html'
})
export class ProductsComponent {

    @ViewChild(ProductEditComponent) pec: ProductEditComponent;

    liveSearch: string;
    sortorder: string = 'productName';
    allProducts: Product[];

    constructor(
        private router: Router,
        private productService: ProductService) {
    }
    //---------------------------------------------------------------------------
    createNewProduct(){
        this.pec.createNewProduct();
    }
    editProduct(id: number){
        this.pec.editProduct(id);
    }
    //---------------------------------------------------------------------------
    watchLiveSearch(){
        console.log(this.liveSearch +"-");
    }
    refreshProductsList() {
        this.productService.getProducts().then(products => this.allProducts = products);
    }
    ngOnInit() {
        this.refreshProductsList();
    }
}