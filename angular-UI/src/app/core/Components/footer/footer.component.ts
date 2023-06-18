import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  copyrightYear: number = new Date().getFullYear();

  toggleFooterContent(event: any) {
    event.target.lastElementChild.classList.toggle('opened');
    event.target.parentElement.nextElementSibling.classList.toggle('active');
  }
}
