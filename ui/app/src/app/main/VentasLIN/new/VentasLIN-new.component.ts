import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'VentasLIN-new',
  templateUrl: './VentasLIN-new.component.html',
  styleUrls: ['./VentasLIN-new.component.scss']
})
export class VentasLINNewComponent {
  @ViewChild("VentasLINForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}