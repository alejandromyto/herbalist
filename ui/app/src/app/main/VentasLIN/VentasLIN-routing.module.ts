import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasLINHomeComponent } from './home/VentasLIN-home.component';
import { VentasLINNewComponent } from './new/VentasLIN-new.component';
import { VentasLINDetailComponent } from './detail/VentasLIN-detail.component';

const routes: Routes = [
  {path: '', component: VentasLINHomeComponent},
  { path: 'new', component: VentasLINNewComponent },
  { path: ':id', component: VentasLINDetailComponent,
    data: {
      oPermission: {
        permissionId: 'VentasLIN-detail-permissions'
      }
    }
  }
];

export const VENTASLIN_MODULE_DECLARATIONS = [
    VentasLINHomeComponent,
    VentasLINNewComponent,
    VentasLINDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasLINRoutingModule { }