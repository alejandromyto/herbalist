import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TIENDA_MODULE_DECLARATIONS, TiendaRoutingModule} from  './Tienda-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TiendaRoutingModule
  ],
  declarations: TIENDA_MODULE_DECLARATIONS,
  exports: TIENDA_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TiendaModule { }