import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Cliente', loadChildren: () => import('./Cliente/Cliente.module').then(m => m.ClienteModule) },
    
        { path: 'ComprasCAB', loadChildren: () => import('./ComprasCAB/ComprasCAB.module').then(m => m.ComprasCABModule) },
    
        { path: 'ComprasLIN', loadChildren: () => import('./ComprasLIN/ComprasLIN.module').then(m => m.ComprasLINModule) },
    
        { path: 'Producto', loadChildren: () => import('./Producto/Producto.module').then(m => m.ProductoModule) },
    
        { path: 'Proveedor', loadChildren: () => import('./Proveedor/Proveedor.module').then(m => m.ProveedorModule) },
    
        { path: 'StockTienda', loadChildren: () => import('./StockTienda/StockTienda.module').then(m => m.StockTiendaModule) },
    
        { path: 'Tienda', loadChildren: () => import('./Tienda/Tienda.module').then(m => m.TiendaModule) },
    
        { path: 'TraspasosLIN', loadChildren: () => import('./TraspasosLIN/TraspasosLIN.module').then(m => m.TraspasosLINModule) },
    
        { path: 'VentasCAB', loadChildren: () => import('./VentasCAB/VentasCAB.module').then(m => m.VentasCABModule) },
    
        { path: 'VentasLIN', loadChildren: () => import('./VentasLIN/VentasLIN.module').then(m => m.VentasLINModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }