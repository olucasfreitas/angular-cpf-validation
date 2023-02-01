import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ClientInfoCardComponent } from './client-info-card.component';

describe('ClientInfoCardComponent', () => {
  let component: ClientInfoCardComponent;
  let fixture: ComponentFixture<ClientInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInfoCardComponent],
      imports: [MatCardModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should emit the cpf string if the value is not empty', () => {
  //   const spy = spyOn(component.cpfEmitter, 'emit');
  //   component.cpfValue = '12345678901';
  //   component.onSub();
  //   expect(spy).toHaveBeenCalledWith('12345678901');
  // });
});
