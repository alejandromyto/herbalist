import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ComprasLIN-card.component.html',
  styleUrls: ['./ComprasLIN-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ComprasLIN-card]': 'true'
  }
})

export class ComprasLINCardComponent {


}