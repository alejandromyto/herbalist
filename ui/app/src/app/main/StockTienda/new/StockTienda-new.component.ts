import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockTienda-new',
  templateUrl: './StockTienda-new.component.html',
  styleUrls: ['./StockTienda-new.component.scss']
})
export class StockTiendaNewComponent {
  @ViewChild("StockTiendaForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}