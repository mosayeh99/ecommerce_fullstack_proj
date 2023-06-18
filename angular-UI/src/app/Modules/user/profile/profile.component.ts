import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements  OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(environment.apiUrl + '/products').subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    })
  }

}
