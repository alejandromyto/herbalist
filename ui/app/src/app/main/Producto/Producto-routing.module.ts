import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoHomeComponent } from './home/Producto-home.component';
import { ProductoNewComponent } from './new/Producto-new.component';
import { ProductoDetailComponent } from './detail/Producto-detail.component';

const routes: Routes = [
  {path: '', component: ProductoHomeComponent},
  { path: 'new', component: ProductoNewComponent },
  { path: ':Referencia', component: ProductoDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Producto-detail-permissions'
      }
    }
  },{
    path: ':ReferenciaProducto/ComprasLIN', loadChildren: () => import('../ComprasLIN/ComprasLIN.module').then(m => m.ComprasLINModule),
    data: {
        oPermission: {
            permissionId: 'ComprasLIN-detail-permissions'
        }
    }
},{
    path: ':Referencia/StockTienda', loadChildren: () => import('../StockTienda/StockTienda.module').then(m => m.StockTiendaModule),
    data: {
        oPermission: {
            permissionId: 'StockTienda-detail-permissions'
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
    path: ':RefProducto/VentasLIN', loadChildren: () => import('../VentasLIN/VentasLIN.module').then(m => m.VentasLINModule),
    data: {
        oPermission: {
            permissionId: 'VentasLIN-detail-permissions'
        }
    }
}
];

export const PRODUCTO_MODULE_DECLARATIONS = [
    ProductoHomeComponent,
    ProductoNewComponent,
    ProductoDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }