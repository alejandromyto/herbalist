import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tienda-card.component.html',
  styleUrls: ['./Tienda-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tienda-card]': 'true'
  }
})

export class TiendaCardComponent {


}