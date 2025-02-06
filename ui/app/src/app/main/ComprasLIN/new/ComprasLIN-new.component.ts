import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ComprasLIN-new',
  templateUrl: './ComprasLIN-new.component.html',
  styleUrls: ['./ComprasLIN-new.component.scss']
})
export class ComprasLINNewComponent {
  @ViewChild("ComprasLINForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}