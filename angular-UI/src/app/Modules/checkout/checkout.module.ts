import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import { CheckoutComponent } from './checkout.component';
import {SharedModule} from "../../shared/shared.module";
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent}
];

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderSummaryComponent,
    ShippingAddressComponent,
    PaymentMethodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CheckoutModule { }
