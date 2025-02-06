import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Cliente-card.component.html',
  styleUrls: ['./Cliente-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Cliente-card]': 'true'
  }
})

export class ClienteCardComponent {


}