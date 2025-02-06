import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ComprasCAB-card.component.html',
  styleUrls: ['./ComprasCAB-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ComprasCAB-card]': 'true'
  }
})

export class ComprasCABCardComponent {


}