import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasCABHomeComponent } from './home/VentasCAB-home.component';
import { VentasCABNewComponent } from './new/VentasCAB-new.component';
import { VentasCABDetailComponent } from './detail/VentasCAB-detail.component';

const routes: Routes = [
  {path: '', component: VentasCABHomeComponent},
  { path: 'new', component: VentasCABNewComponent },
  { path: ':Numero', component: VentasCABDetailComponent,
    data: {
      oPermission: {
        permissionId: 'VentasCAB-detail-permissions'
      }
    }
  },{
    path: ':Numero/VentasLIN', loadChildren: () => import('../VentasLIN/VentasLIN.module').then(m => m.VentasLINModule),
    data: {
        oPermission: {
            permissionId: 'VentasLIN-detail-permissions'
        }
    }
}
];

export const VENTASCAB_MODULE_DECLARATIONS = [
    VentasCABHomeComponent,
    VentasCABNewComponent,
    VentasCABDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasCABRoutingModule { }