import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from './home.component';
import { HeadComponent } from './head/head.component';
import { PromoComponent } from './promo/promo.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { HeadSliderComponent } from './head-slider/head-slider.component';
import { BannersCollectionComponent } from './banners-collection/banners-collection.component';

const routes: Routes = [
  {path:'', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    HeadComponent,
    PromoComponent,
    ProductsSliderComponent,
    ImagesSliderComponent,
    HeadSliderComponent,
    BannersCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
