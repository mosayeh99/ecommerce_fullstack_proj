import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ProductComponent } from "./Components/product/product.component";
import { ProductQuantityComponent } from "./Components/product-quantity/product-quantity.component";
import { PageHeadBannerComponent } from './Components/page-head-banner/page-head-banner.component';
import { SectionHeadTextComponent } from './Components/section-head-text/section-head-text.component';
import { ImgContainerComponent } from './Components/img-container/img-container.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { SwiperSliderDirective } from './Directives/swiper-slider.directive';



@NgModule({
  declarations: [
    ProductComponent,
    ProductQuantityComponent,
    PageHeadBannerComponent,
    SectionHeadTextComponent,
    ImgContainerComponent,
    SwiperSliderDirective,
  ],
    exports: [
        ProductComponent,
        ProductQuantityComponent,
        PageHeadBannerComponent,
        SectionHeadTextComponent,
        ImgContainerComponent,
        SwiperSliderDirective
    ],
  imports: [
    CommonModule,
    RouterLink,
    MatTooltipModule
  ]
})
export class SharedModule { }
