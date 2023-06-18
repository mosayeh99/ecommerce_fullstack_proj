import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-head-text',
  templateUrl: './section-head-text.component.html',
  styleUrls: ['./section-head-text.component.css']
})
export class SectionHeadTextComponent {

  @Input() headText: string = '';

}
