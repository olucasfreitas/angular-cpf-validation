import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CpfFormComponent } from './cpf-form.component';

describe('CpfFormComponent', () => {
  let component: CpfFormComponent;
  let fixture: ComponentFixture<CpfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpfFormComponent],
      imports: [ReactiveFormsModule, MatFormFieldModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CpfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
