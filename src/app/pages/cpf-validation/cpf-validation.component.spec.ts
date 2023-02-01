import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottombarComponent } from 'src/app/components/bottombar/bottombar.component';
import { CpfFormComponent } from 'src/app/components/cpf-form/cpf-form.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { TopbarComponent } from 'src/app/components/topbar/topbar.component';

import { CpfValidationComponent } from './cpf-validation.component';

describe('CpfValidationComponent', () => {
  let component: CpfValidationComponent;
  let fixture: ComponentFixture<CpfValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CpfValidationComponent,
        SidebarComponent,
        TopbarComponent,
        StepperComponent,
        CpfFormComponent,
        BottombarComponent,
      ],
      imports: [
        HttpClientTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatStepperModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CpfValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
