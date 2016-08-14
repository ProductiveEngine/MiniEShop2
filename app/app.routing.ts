import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent }  from './about/about.component';
import { ProductsComponent }  from './products/products.component';
import { ProductTypesComponent } from './product-types/product-types.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'product-types',
        component: ProductTypesComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },


];

export const routing = RouterModule.forRoot(appRoutes);
