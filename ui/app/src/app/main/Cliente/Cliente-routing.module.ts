import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteHomeComponent } from './home/Cliente-home.component';
import { ClienteNewComponent } from './new/Cliente-new.component';
import { ClienteDetailComponent } from './detail/Cliente-detail.component';

const routes: Routes = [
  {path: '', component: ClienteHomeComponent},
  { path: 'new', component: ClienteNewComponent },
  { path: ':NCuenta', component: ClienteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Cliente-detail-permissions'
      }
    }
  },{
    path: ':NCuentaCliente/VentasLIN', loadChildren: () => import('../VentasLIN/VentasLIN.module').then(m => m.VentasLINModule),
    data: {
        oPermission: {
            permissionId: 'VentasLIN-detail-permissions'
        }
    }
}
];

export const CLIENTE_MODULE_DECLARATIONS = [
    ClienteHomeComponent,
    ClienteNewComponent,
    ClienteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }