import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  opened = false;
  mode: MatDrawerMode = 'side';
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  constructor() {}

  ngOnInit(): void {
    this.onResize({ target: { innerWidth: window.innerWidth } });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 600) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
      this.opened = true;
    }
  }
}
