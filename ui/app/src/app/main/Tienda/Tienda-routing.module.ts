import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaHomeComponent } from './home/Tienda-home.component';
import { TiendaNewComponent } from './new/Tienda-new.component';
import { TiendaDetailComponent } from './detail/Tienda-detail.component';

const routes: Routes = [
  {path: '', component: TiendaHomeComponent},
  { path: 'new', component: TiendaNewComponent },
  { path: ':idTienda', component: TiendaDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tienda-detail-permissions'
      }
    }
  },{
    path: ':idTienda/ComprasCAB', loadChildren: () => import('../ComprasCAB/ComprasCAB.module').then(m => m.ComprasCABModule),
    data: {
        oPermission: {
            permissionId: 'ComprasCAB-detail-permissions'
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
    path: ':idTienda/StockTienda', loadChildren: () => import('../StockTienda/StockTienda.module').then(m => m.StockTiendaModule),
    data: {
        oPermission: {
            permissionId: 'StockTienda-detail-permissions'
        }
    }
}
];

export const TIENDA_MODULE_DECLARATIONS = [
    TiendaHomeComponent,
    TiendaNewComponent,
    TiendaDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }