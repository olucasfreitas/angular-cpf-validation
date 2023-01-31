import { Component, Input } from '@angular/core';
import { Client } from 'src/app/entities/client.entity';

@Component({
  selector: 'app-client-account-card',
  templateUrl: './client-account-card.component.html',
  styleUrls: ['./client-account-card.component.scss'],
})
export class ClientAccountCardComponent {
  @Input() client: Client = new Client();

  constructor() {
    console.log(this.client, 'ClientAccountCardComponent');
  }
}
