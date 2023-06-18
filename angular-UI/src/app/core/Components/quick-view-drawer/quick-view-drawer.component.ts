import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-quick-view-drawer',
  templateUrl: './quick-view-drawer.component.html',
  styleUrls: ['./quick-view-drawer.component.css']
})
export class QuickViewDrawerComponent implements AfterViewInit, OnInit {

  @ViewChild('quickViewDrawer') quickViewDrawer!: ElementRef;

  constructor(private drawerSer: DrawerService) {
  }

  ngAfterViewInit() {
    this.drawerSer.setDrawer(this.quickViewDrawer);
  }

  ngOnInit() {
    this.drawerSer.getDrawerStatus().subscribe((drawerName) => {
      if (drawerName == 'quickView') {
        this.drawerSer.toggleDrawer(this.quickViewDrawer);
      }
    })
  }

  closeQuickViewDrawer() {
    this.drawerSer.closerDrawer();
  }

}
