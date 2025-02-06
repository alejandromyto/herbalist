import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './VentasLIN-card.component.html',
  styleUrls: ['./VentasLIN-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.VentasLIN-card]': 'true'
  }
})

export class VentasLINCardComponent {


}