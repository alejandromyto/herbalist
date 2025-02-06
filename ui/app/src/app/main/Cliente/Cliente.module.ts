import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CLIENTE_MODULE_DECLARATIONS, ClienteRoutingModule} from  './Cliente-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ClienteRoutingModule
  ],
  declarations: CLIENTE_MODULE_DECLARATIONS,
  exports: CLIENTE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClienteModule { }