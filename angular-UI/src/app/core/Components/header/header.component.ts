import {Component} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchValue: string = '';

  constructor(private drawerSer: DrawerService) {
  }

  toggleMenuDrawer() {
    this.drawerSer.activeDrawer.next('menu');
  }
}
