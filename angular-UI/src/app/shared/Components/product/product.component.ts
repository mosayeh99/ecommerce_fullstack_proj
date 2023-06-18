import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DrawerService} from "../../../core/Services/drawer.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  @Input() isAddToWishlistBtnNeeded: boolean = true;

  constructor(private drawerSer: DrawerService) {
  }

  toggleQuickViewDrawer() {
    this.drawerSer.activeDrawer.next('quickView');
  }

}
