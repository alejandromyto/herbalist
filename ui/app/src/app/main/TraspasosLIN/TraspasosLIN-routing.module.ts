import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraspasosLINHomeComponent } from './home/TraspasosLIN-home.component';
import { TraspasosLINNewComponent } from './new/TraspasosLIN-new.component';
import { TraspasosLINDetailComponent } from './detail/TraspasosLIN-detail.component';

const routes: Routes = [
  {path: '', component: TraspasosLINHomeComponent},
  { path: 'new', component: TraspasosLINNewComponent },
  { path: ':Numero', component: TraspasosLINDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TraspasosLIN-detail-permissions'
      }
    }
  }
];

export const TRASPASOSLIN_MODULE_DECLARATIONS = [
    TraspasosLINHomeComponent,
    TraspasosLINNewComponent,
    TraspasosLINDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraspasosLINRoutingModule { }