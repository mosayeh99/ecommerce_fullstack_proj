import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { MasterLayoutComponent } from './Components/master-layout/master-layout.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { MenuDrawerComponent } from './Components/menu-drawer/menu-drawer.component';
import { SearchDrawerComponent } from './Components/search-drawer/search-drawer.component';
import { MobileNavbarComponent } from './Components/mobile-navbar/mobile-navbar.component';
import {FormsModule} from "@angular/forms";
import { FilterDrawerComponent } from './Components/filter-drawer/filter-drawer.component';
import { QuickViewDrawerComponent } from './Components/quick-view-drawer/quick-view-drawer.component';
import { OverlayComponent } from './Components/overlay/overlay.component';



@NgModule({
  declarations: [
    MasterLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MobileNavbarComponent,
    MenuDrawerComponent,
    SearchDrawerComponent,
    FilterDrawerComponent,
    QuickViewDrawerComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
  ]
})
export class CoreModule { }
