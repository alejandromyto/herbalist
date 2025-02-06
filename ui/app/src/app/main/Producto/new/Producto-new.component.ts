import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Producto-new',
  templateUrl: './Producto-new.component.html',
  styleUrls: ['./Producto-new.component.scss']
})
export class ProductoNewComponent {
  @ViewChild("ProductoForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}