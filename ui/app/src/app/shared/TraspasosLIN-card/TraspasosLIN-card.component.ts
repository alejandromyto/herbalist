import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TraspasosLIN-card.component.html',
  styleUrls: ['./TraspasosLIN-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TraspasosLIN-card]': 'true'
  }
})

export class TraspasosLINCardComponent {


}