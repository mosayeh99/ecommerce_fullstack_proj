import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterLayoutComponent} from "./core/Components/master-layout/master-layout.component";
import {authGuard} from "./core/Guards/auth.guard";

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children:
      [
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {
          path: 'home',
          loadChildren: () => import('src/app/Modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'user',
          loadChildren: () => import('src/app/Modules/user/user.module').then(m => m.UserModule)
        },
        {
          path: 'products',
          loadChildren: () => import('src/app/Modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
        },
        {
          path: 'search',
          loadChildren: () => import('src/app/Modules/search-result/search-result.module').then(m => m.SearchResultModule)
        },
        {
          path: 'cart',
          loadChildren: () => import('src/app/Modules/cart/cart.module').then(m => m.CartModule)
        },
        {
          path: 'wishlist',
          loadChildren: () => import('src/app/Modules/wishlist/wishlist.module').then(m => m.WishlistModule)
        },
        {
          path: 'checkout',
          canActivate: [authGuard],
          loadChildren: () => import('src/app/Modules/checkout/checkout.module').then(m => m.CheckoutModule)
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
