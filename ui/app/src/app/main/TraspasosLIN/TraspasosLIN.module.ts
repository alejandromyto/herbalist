import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRASPASOSLIN_MODULE_DECLARATIONS, TraspasosLINRoutingModule} from  './TraspasosLIN-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TraspasosLINRoutingModule
  ],
  declarations: TRASPASOSLIN_MODULE_DECLARATIONS,
  exports: TRASPASOSLIN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TraspasosLINModule { }