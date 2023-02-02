import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ClientService } from './client.service';
import { Client } from '../entities/client.entity';

describe('ClientService', () => {
  let service: ClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get client by cpf', () => {
    const expected = [new Client()];
    service
      .getClientByCPF('01182128704')
      .subscribe((data) => expect(data).toEqual(expected));

    const req = httpTestingController.expectOne(
      'http://localhost:4500/clients?cpf=01182128704'
    );
    expect(req.request.method).toEqual('GET');

    req.flush(expected);
  });
});
