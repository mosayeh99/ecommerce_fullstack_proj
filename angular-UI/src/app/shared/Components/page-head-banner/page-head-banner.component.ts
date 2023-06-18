import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-head-banner',
  templateUrl: './page-head-banner.component.html',
  styleUrls: ['./page-head-banner.component.css']
})
export class PageHeadBannerComponent {

  @Input() headText: string | null = null;

}
