import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './VentasCAB-card.component.html',
  styleUrls: ['./VentasCAB-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.VentasCAB-card]': 'true'
  }
})

export class VentasCABCardComponent {


}