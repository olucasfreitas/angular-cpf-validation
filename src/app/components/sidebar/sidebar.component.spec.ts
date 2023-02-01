import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [MatSidenavModule, BrowserAnimationsModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set mode to "over" and opened to false for small screens', () => {
    component.onResize({ target: { innerWidth: 599 } });

    expect(component.mode).toBe('over');
    expect(component.opened).toBe(false);
  });

  it('should set mode to "side" and opened to true for large screens', () => {
    component.onResize({ target: { innerWidth: 600 } });

    expect(component.mode).toBe('side');
    expect(component.opened).toBe(true);
  });
});
