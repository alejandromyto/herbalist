import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockTienda-card.component.html',
  styleUrls: ['./StockTienda-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockTienda-card]': 'true'
  }
})

export class StockTiendaCardComponent {


}