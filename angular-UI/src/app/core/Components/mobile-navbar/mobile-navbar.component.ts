import {Component} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent {

  constructor(private drawerSer: DrawerService) {
  }

  toggleMenuDrawer() {
    this.drawerSer.activeDrawer.next('menu');
  }

  toggleSearchDrawer() {
    this.drawerSer.activeDrawer.next('search');
  }

}
