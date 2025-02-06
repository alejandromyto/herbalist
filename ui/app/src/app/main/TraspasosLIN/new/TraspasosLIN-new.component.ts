import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TraspasosLIN-new',
  templateUrl: './TraspasosLIN-new.component.html',
  styleUrls: ['./TraspasosLIN-new.component.scss']
})
export class TraspasosLINNewComponent {
  @ViewChild("TraspasosLINForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}