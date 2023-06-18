import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsComponent } from './product-details.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductSizesComponent } from './product-sizes/product-sizes.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {path: ':id', component: ProductDetailsComponent},
];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductSliderComponent,
    ProductDescriptionComponent,
    ProductInfoComponent,
    ProductSizesComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatTooltipModule
    ]
})
export class ProductDetailsModule { }
