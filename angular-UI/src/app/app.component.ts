import {Component, HostListener, OnInit} from '@angular/core';
import {register} from 'swiper/element/bundle';
import {LoaderService} from "./core/Services/loader.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AuthService} from "./core/Services/Api/Auth/auth.service";

register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public loaderSer: LoaderService) {
  }

  title = 'e-commerce';

}
