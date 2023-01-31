import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  opened = false;
  mode: MatDrawerMode = 'side';
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  constructor() {
    if (window.innerWidth < 600) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
      this.opened = true;
    }
  }

  toggleSidebar() {
    this.opened = !this.opened;
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
