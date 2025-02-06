import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Proveedor-new',
  templateUrl: './Proveedor-new.component.html',
  styleUrls: ['./Proveedor-new.component.scss']
})
export class ProveedorNewComponent {
  @ViewChild("ProveedorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}