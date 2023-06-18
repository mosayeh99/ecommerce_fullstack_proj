import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { WishlistComponent } from './wishlist.component';


const routes: Routes = [
  {path: '', component: WishlistComponent},
];

@NgModule({
  declarations: [
    WishlistComponent
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule
    ]
})
export class WishlistModule { }
