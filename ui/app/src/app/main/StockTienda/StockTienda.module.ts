import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKTIENDA_MODULE_DECLARATIONS, StockTiendaRoutingModule} from  './StockTienda-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockTiendaRoutingModule
  ],
  declarations: STOCKTIENDA_MODULE_DECLARATIONS,
  exports: STOCKTIENDA_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockTiendaModule { }