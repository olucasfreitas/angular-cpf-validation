import { Injectable } from '@angular/core';
import { Client } from '@entities/client.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  url = 'http://localhost:4500';

  constructor(private http: HttpClient) {}

  getClientByCPF(cpf: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/clients?cpf=${cpf}`);
  }
}
