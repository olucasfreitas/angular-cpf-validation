import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { BottombarComponent } from 'src/app/components/bottombar/bottombar.component';
import { CpfFormComponent } from 'src/app/components/cpf-form/cpf-form.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { TopbarComponent } from 'src/app/components/topbar/topbar.component';
import { Client } from 'src/app/entities/client.entity';
import { ClientService } from 'src/app/services/client.service';

import { CpfValidationComponent } from './cpf-validation.component';

describe('CpfValidationComponent', () => {
  let component: CpfValidationComponent;
  let fixture: ComponentFixture<CpfValidationComponent>;
  let clientService: ClientService;

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
      // providers: [{ provide: ClientService, useValue: clientServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CpfValidationComponent);
    component = fixture.componentInstance;

    clientService = TestBed.inject(
      ClientService
    ) as jasmine.SpyObj<ClientService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set clientNotFound to true if client is not found', () => {
    spyOn(clientService, 'getClientByCPF').and.returnValue(of([]));

    component.validateCpf('12345678901');

    expect(component.clientNotFound).toBe(true);
  });

  it('should set clientNotFound to false and assign client if found', () => {
    const client = [new Client()];
    spyOn(clientService, 'getClientByCPF').and.returnValue(of(client));

    component.validateCpf('12345678901');

    expect(component.clientNotFound).toBe(false);
    expect(component.client).toEqual(client[0]);
  });
});
