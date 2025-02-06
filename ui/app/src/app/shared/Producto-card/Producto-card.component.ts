import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Producto-card.component.html',
  styleUrls: ['./Producto-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Producto-card]': 'true'
  }
})

export class ProductoCardComponent {


}