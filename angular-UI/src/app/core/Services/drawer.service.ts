import {ElementRef, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {OverlayService} from "./overlay.service";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  activeDrawer: Subject<string> = new Subject<string>();
  drawers: ElementRef[] = [];

  constructor(private overlaySer: OverlayService) {
  }

  setDrawer(drawer: ElementRef) {
    this.drawers.push(drawer);
  }

  toggleDrawer(drawer: ElementRef) {
    this.drawers.filter(dr => dr != drawer).map(dr => dr.nativeElement.classList.remove('active'));
    drawer.nativeElement.classList.toggle('active');
    if (drawer.nativeElement.classList.contains('active')) {
      this.overlaySer.isOverlayActive.next(true);
    } else {
      this.overlaySer.isOverlayActive.next(false);
    }
  }

  closerDrawer() {
    this.drawers.map(dr => dr.nativeElement.classList.remove('active'));
    this.overlaySer.isOverlayActive.next(false);
  }

  getDrawerStatus(): Observable<string> {
    return this.activeDrawer.asObservable();
  }

}
