import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Tienda-new',
  templateUrl: './Tienda-new.component.html',
  styleUrls: ['./Tienda-new.component.scss']
})
export class TiendaNewComponent {
  @ViewChild("TiendaForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}