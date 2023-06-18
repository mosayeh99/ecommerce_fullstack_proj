import {Component, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {

  mainSliderImageSrc: string = "https://raw.githubusercontent.com/mosayeh99/products_json_api/main/images/1/1.jpg";
  @ViewChildren('productThumb') productThumbs!: QueryList<any>;

  displayImage(img: any) {
    this.mainSliderImageSrc = img.target.src;
    this.productThumbs.forEach(el => el.nativeElement.classList.remove('active'));
    img.target.classList.add('active');
  }

}
