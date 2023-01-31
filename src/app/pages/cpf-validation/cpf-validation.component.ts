import { Component } from '@angular/core';
import { Client } from 'src/app/entities/client.entity';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cpf-validation',
  templateUrl: './cpf-validation.component.html',
  styleUrls: ['./cpf-validation.component.scss'],
})
export class CpfValidationComponent {
  client: Client = new Client();
  clientNotFound = false;

  constructor(private clientService: ClientService) {}

  validateCpf(cpf: string): void {
    this.clientService.getClientByCPF(cpf).subscribe((client) => {
      if (client.length === 0) {
        this.clientNotFound = true;
      } else {
        this.clientNotFound = false;
        Object.assign(this.client, client[0]);
      }
    });
  }
}
