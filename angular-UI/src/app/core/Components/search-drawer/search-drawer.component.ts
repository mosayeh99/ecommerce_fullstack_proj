import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-search-drawer',
  templateUrl: './search-drawer.component.html',
  styleUrls: ['./search-drawer.component.css']
})
export class SearchDrawerComponent implements AfterViewInit, OnInit {

  @ViewChild('searchDrawer') searchDrawer!: ElementRef;

  constructor(private drawerSer: DrawerService) {
  }

  ngAfterViewInit() {
    this.drawerSer.setDrawer(this.searchDrawer);
  }

  ngOnInit(): void {
    this.drawerSer.getDrawerStatus().subscribe((drawerName) => {
      if (drawerName == 'search') {
        this.drawerSer.toggleDrawer(this.searchDrawer);
      }
    })
  }

  closeFilterDrawer() {
    this.drawerSer.closerDrawer();
  }

}
