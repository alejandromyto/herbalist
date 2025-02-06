import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Proveedor-card.component.html',
  styleUrls: ['./Proveedor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Proveedor-card]': 'true'
  }
})

export class ProveedorCardComponent {


}