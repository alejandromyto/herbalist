import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COMPRASLIN_MODULE_DECLARATIONS, ComprasLINRoutingModule} from  './ComprasLIN-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ComprasLINRoutingModule
  ],
  declarations: COMPRASLIN_MODULE_DECLARATIONS,
  exports: COMPRASLIN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComprasLINModule { }