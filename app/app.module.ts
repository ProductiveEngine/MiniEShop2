import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { ProductsComponent }  from './products/products.component';
import { ProductEditComponent }  from './products/product-edit.component';
import { ProductTypesComponent } from './product-types/product-types.component';

import {ProductService} from "./services/product.service";
import {ProductTypeService} from "./services/product-type.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ProductEditComponent,
        ProductTypesComponent
    ],
    providers: [
        ProductService,
        ProductTypeService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
