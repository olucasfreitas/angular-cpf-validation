import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfValidationComponent } from './cpf-validation.component';

describe('CpfValidationComponent', () => {
  let component: CpfValidationComponent;
  let fixture: ComponentFixture<CpfValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
