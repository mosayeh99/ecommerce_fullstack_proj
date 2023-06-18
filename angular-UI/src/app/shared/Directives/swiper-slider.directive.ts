import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appSwiperSlider]'
})
export class SwiperSliderDirective {

  constructor(private slider: ElementRef) { }

  @HostListener('window:resize') onWindowResize() {
    if (window.innerWidth >= 991) {
      this.slider.nativeElement.setAttribute('slides-per-view', 5);
      this.slider.nativeElement.setAttribute('navigation', 'true');
    } else if (window.innerWidth < 991 && window.innerWidth > 776) {
      this.slider.nativeElement.setAttribute('slides-per-view', 4);
    } else if (window.innerWidth < 776 && window.innerWidth > 500) {
      this.slider.nativeElement.setAttribute('slides-per-view', 3);
    } else {
      this.slider.nativeElement.setAttribute('slides-per-view', 2);
    }
  }

}
