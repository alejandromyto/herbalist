import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VENTASCAB_MODULE_DECLARATIONS, VentasCABRoutingModule} from  './VentasCAB-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VentasCABRoutingModule
  ],
  declarations: VENTASCAB_MODULE_DECLARATIONS,
  exports: VENTASCAB_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VentasCABModule { }