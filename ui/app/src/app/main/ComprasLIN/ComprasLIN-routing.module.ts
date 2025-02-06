import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasLINHomeComponent } from './home/ComprasLIN-home.component';
import { ComprasLINNewComponent } from './new/ComprasLIN-new.component';
import { ComprasLINDetailComponent } from './detail/ComprasLIN-detail.component';

const routes: Routes = [
  {path: '', component: ComprasLINHomeComponent},
  { path: 'new', component: ComprasLINNewComponent },
  { path: ':id', component: ComprasLINDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ComprasLIN-detail-permissions'
      }
    }
  }
];

export const COMPRASLIN_MODULE_DECLARATIONS = [
    ComprasLINHomeComponent,
    ComprasLINNewComponent,
    ComprasLINDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasLINRoutingModule { }