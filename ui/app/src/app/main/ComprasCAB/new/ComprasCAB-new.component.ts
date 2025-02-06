import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ComprasCAB-new',
  templateUrl: './ComprasCAB-new.component.html',
  styleUrls: ['./ComprasCAB-new.component.scss']
})
export class ComprasCABNewComponent {
  @ViewChild("ComprasCABForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}