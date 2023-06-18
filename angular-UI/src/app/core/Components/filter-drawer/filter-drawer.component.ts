import {Component, ElementRef, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-filter-drawer',
  templateUrl: './filter-drawer.component.html',
  styleUrls: ['./filter-drawer.component.css']
})
export class FilterDrawerComponent implements OnInit, AfterViewInit {

  @ViewChild('filterDrawer') filterDrawer!: ElementRef;

  constructor(private drawerSer: DrawerService) {
  }

  ngAfterViewInit() {
    this.drawerSer.setDrawer(this.filterDrawer);
  }

  ngOnInit(): void {
    this.drawerSer.getDrawerStatus().subscribe((drawerName) => {
      if (drawerName == 'filter') {
        this.drawerSer.toggleDrawer(this.filterDrawer);
      }
    })
  }

  closeFilterDrawer() {
    this.drawerSer.closerDrawer();
  }

}
