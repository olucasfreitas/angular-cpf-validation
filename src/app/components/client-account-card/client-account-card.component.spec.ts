import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountCardComponent } from './client-account-card.component';

describe('ClientAccountCardComponent', () => {
  let component: ClientAccountCardComponent;
  let fixture: ComponentFixture<ClientAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
