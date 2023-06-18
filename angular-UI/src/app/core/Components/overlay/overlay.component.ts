import {Component, HostListener, OnInit} from '@angular/core';
import {OverlayService} from "../../Services/overlay.service";
import {DrawerService} from "../../Services/drawer.service";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  overlayStatus: boolean = false;

  constructor(private overlaySer: OverlayService, private drawerSer: DrawerService) {
  }

  ngOnInit() {
    this.overlaySer.getOverlayStatus().subscribe({
      next: value => this.overlayStatus = value
    })
  }

  @HostListener('click') onOverlayClicked() {
    this.drawerSer.closerDrawer();
  }

}
