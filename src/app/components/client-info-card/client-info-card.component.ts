import { Component, Input } from '@angular/core';
import { Client } from 'src/app/entities/client.entity';

@Component({
  selector: 'app-client-info-card',
  templateUrl: './client-info-card.component.html',
  styleUrls: ['./client-info-card.component.scss'],
})
export class ClientInfoCardComponent {
  @Input() client: Client = new Client();
  @Input() accountType: string = 'Checking';

  constructor() {
    console.log(this.client, 'ClientInfoCardComponent');
  }
}
