import { Component, OnInit } from '@angular/core';

import { ProductType } from '../domain-classes/product-type';
import { ProductTypeService } from '../services/product-type.service';
import {Router} from "@angular/router";

@Component({
    selector: 'product-types',
    templateUrl: 'app/product-types/product-types.component.html'
})
export class ProductTypesComponent {

    newItem: ProductType;
    addMode: boolean = false;
    allProductTypes:ProductType[];

    constructor(
        private router: Router,
        private productTypeService: ProductTypeService) {

    }
    getProductTypes() {
        this.productTypeService.getProductTypes().then(productTypes => this.allProductTypes = productTypes);
    }
    ngOnInit() {
        this.getProductTypes();
    }
    //-----------------------------------------------
    requestSuccess () {
        //notificationFactory.success();
    }

    isDirty (productType: ProductType) {
        return productType.name != productType.serverName;
    }

    toggleAddMode () {
        this.addMode = !this.addMode;
        this.newItem = new ProductType();
    };

    toggleEditMode (productType: ProductType) {

        if (this.allProductTypes != undefined) {
            productType.editMode = !productType.editMode;

            if (!productType.editMode) {
                productType.name = productType.serverName;
            } else {
                productType.serverName = productType.name;

                this.allProductTypes.forEach(function (entry) {
                    if (productType.productTypeId != entry.productTypeId && entry.editMode) {
                        entry.name = entry.serverName;
                        entry.editMode = false;
                    }
                });
            }
        }
    };
    saveProductType() {
        //if ($scope.addForm.$valid) {

        this.newItem.createdDate = new Date();

        /*
            ProductTypeData.save($scope.newItem)
                .$promise
                .then(function (response) {
                    $scope.allProductTypes.unshift(response);
                    $scope.toggleAddMode();
                    requestSuccess();
                })
                .catch(function (response) { console.log('failure', response) });
                */
//        }
    };


}
        /*


        $scope.deleteProductType = function (productType) {
            productType.$delete(function () {
                var index = $scope.allProductTypes.indexOf(productType);
                $scope.allProductTypes.splice(index, 1);

            });
        };

        $scope.updateProductType = function (form, productType) {

            if (form != undefined && form.$valid && productType != null) {
                productType.EditMode = false;

                if (productType.ProductTypeID > 0 && isDirty(productType)) {
                    productType.$update(function () {
                        requestSuccess();
                    });

                } else {
                    productType.CreatedDate = new Date();

                    ProductTypeData.save(productType)
                        .$promise
                        .then(function (response) {
                            requestSuccess();
                        })
                        .catch(function(response) {
                            notificationFactory.error(response);
                        });
                }
            }
        };
    }
);
            */