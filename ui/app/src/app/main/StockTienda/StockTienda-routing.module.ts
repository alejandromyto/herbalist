import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTiendaHomeComponent } from './home/StockTienda-home.component';
import { StockTiendaNewComponent } from './new/StockTienda-new.component';
import { StockTiendaDetailComponent } from './detail/StockTienda-detail.component';

const routes: Routes = [
  {path: '', component: StockTiendaHomeComponent},
  { path: 'new', component: StockTiendaNewComponent },
  { path: ':Referencia/:idTienda', component: StockTiendaDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockTienda-detail-permissions'
      }
    }
  },{
    path: ':idTienda/ComprasLIN', loadChildren: () => import('../ComprasLIN/ComprasLIN.module').then(m => m.ComprasLINModule),
    data: {
        oPermission: {
            permissionId: 'ComprasLIN-detail-permissions'
        }
    }
},{
    path: ':Referencia/TraspasosLIN', loadChildren: () => import('../TraspasosLIN/TraspasosLIN.module').then(m => m.TraspasosLINModule),
    data: {
        oPermission: {
            permissionId: 'TraspasosLIN-detail-permissions'
        }
    }
},{
    path: ':idOrigen/TraspasosLIN', loadChildren: () => import('../TraspasosLIN/TraspasosLIN.module').then(m => m.TraspasosLINModule),
    data: {
        oPermission: {
            permissionId: 'TraspasosLIN-detail-permissions'
        }
    }
},{
    path: ':idTienda/VentasLIN', loadChildren: () => import('../VentasLIN/VentasLIN.module').then(m => m.VentasLINModule),
    data: {
        oPermission: {
            permissionId: 'VentasLIN-detail-permissions'
        }
    }
}
];

export const STOCKTIENDA_MODULE_DECLARATIONS = [
    StockTiendaHomeComponent,
    StockTiendaNewComponent,
    StockTiendaDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTiendaRoutingModule { }