import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css']
})
export class MenuDrawerComponent implements AfterViewInit, OnInit {

  @ViewChild('menuDrawer') menuDrawer!: ElementRef;

  constructor(private drawerSer: DrawerService) {
  }

  ngAfterViewInit() {
    this.drawerSer.setDrawer(this.menuDrawer);
  }

  ngOnInit(): void {
    this.drawerSer.getDrawerStatus().subscribe((drawerName) => {
      if (drawerName == 'menu') {
        this.drawerSer.toggleDrawer(this.menuDrawer);
      }
    })
  }

  closeMenuDrawer() {
    this.drawerSer.closerDrawer();
  }

}
