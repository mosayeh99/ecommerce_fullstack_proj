import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DrawerService} from "../../core/Services/drawer.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchValue: string | null = null;
  @ViewChild('productList') productListElem!: ElementRef;
  @ViewChildren('largeGridLayoutBtn') largeGridLayoutBtns!: QueryList<any>;
  @ViewChildren('mbGridLayoutBtn') mbGridLayoutBtns!: QueryList<any>;

  constructor(private activeRoute: ActivatedRoute, private drawerSer: DrawerService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      this.searchValue = param.get('searchValue');
    })
  }

  toggleFilterDrawer() {
    this.drawerSer.activeDrawer.next('filter');
  }

  changeProductsLargeGrid(grid: string, gridBtn:any) {
    this.productListElem.nativeElement.removeAttribute('class');
    this.productListElem.nativeElement.classList.add(grid);
    this.largeGridLayoutBtns.forEach(el => el.nativeElement.classList.remove('active'));
    gridBtn.target.classList.add('active');
  }

  changeProductsMbGrid(grid: string, gridBtn:any) {
    this.productListElem.nativeElement.removeAttribute('class');
    this.productListElem.nativeElement.classList.add(grid);
    this.mbGridLayoutBtns.forEach(el => el.nativeElement.classList.remove('active'));
    gridBtn.target.classList.add('active');
  }

}
