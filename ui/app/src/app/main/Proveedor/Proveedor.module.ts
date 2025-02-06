import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROVEEDOR_MODULE_DECLARATIONS, ProveedorRoutingModule} from  './Proveedor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProveedorRoutingModule
  ],
  declarations: PROVEEDOR_MODULE_DECLARATIONS,
  exports: PROVEEDOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProveedorModule { }