import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-img-container',
  templateUrl: './img-container.component.html',
  styleUrls: ['./img-container.component.css']
})
export class ImgContainerComponent {

  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() imgText: string | null = null;
  @Input() contentLink: string = '.';

}
