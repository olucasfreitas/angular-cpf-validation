import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CpfFormComponent } from './cpf-form.component';

describe('CpfFormComponent', () => {
  let component: CpfFormComponent;
  let fixture: ComponentFixture<CpfFormComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpfFormComponent],
      imports: [ReactiveFormsModule, MatFormFieldModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CpfFormComponent);
    formBuilder = new FormBuilder();
    component = fixture.componentInstance;
    component.cpfForm = formBuilder.group({
      cpf: ['12345678901', [Validators.required]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cpf value if cpf exists in the form', () => {
    spyOn(component.cpfEmitter, 'emit');

    component.onSubmit();

    expect(component.cpfEmitter.emit).toHaveBeenCalledWith('12345678901');
  });

  it('should not emit cpf value if cpf is not present in the form', () => {
    component.cpfForm = formBuilder.group({
      cpf: ['', [Validators.required]],
    });
    spyOn(component.cpfEmitter, 'emit');

    component.onSubmit();

    expect(component.cpfEmitter.emit).not.toHaveBeenCalled();
  });
});
