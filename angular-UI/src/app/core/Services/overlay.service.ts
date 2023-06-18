import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  isOverlayActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getOverlayStatus(): Observable<boolean> {
    return this.isOverlayActive.asObservable();
  }
}
