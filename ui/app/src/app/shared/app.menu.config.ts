import { MenuRootItem } from 'ontimize-web-ngx';

import { ClienteCardComponent } from './Cliente-card/Cliente-card.component';

import { ComprasCABCardComponent } from './ComprasCAB-card/ComprasCAB-card.component';

import { ComprasLINCardComponent } from './ComprasLIN-card/ComprasLIN-card.component';

import { ProductoCardComponent } from './Producto-card/Producto-card.component';

import { ProveedorCardComponent } from './Proveedor-card/Proveedor-card.component';

import { StockTiendaCardComponent } from './StockTienda-card/StockTienda-card.component';

import { TiendaCardComponent } from './Tienda-card/Tienda-card.component';

import { TraspasosLINCardComponent } from './TraspasosLIN-card/TraspasosLIN-card.component';

import { VentasCABCardComponent } from './VentasCAB-card/VentasCAB-card.component';

import { VentasLINCardComponent } from './VentasLIN-card/VentasLIN-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Cliente', name: 'CLIENTE', icon: 'view_list', route: '/main/Cliente' }
    
        ,{ id: 'ComprasCAB', name: 'COMPRASCAB', icon: 'view_list', route: '/main/ComprasCAB' }
    
        ,{ id: 'ComprasLIN', name: 'COMPRASLIN', icon: 'view_list', route: '/main/ComprasLIN' }
    
        ,{ id: 'Producto', name: 'PRODUCTO', icon: 'view_list', route: '/main/Producto' }
    
        ,{ id: 'Proveedor', name: 'PROVEEDOR', icon: 'view_list', route: '/main/Proveedor' }
    
        ,{ id: 'StockTienda', name: 'STOCKTIENDA', icon: 'view_list', route: '/main/StockTienda' }
    
        ,{ id: 'Tienda', name: 'TIENDA', icon: 'view_list', route: '/main/Tienda' }
    
        ,{ id: 'TraspasosLIN', name: 'TRASPASOSLIN', icon: 'view_list', route: '/main/TraspasosLIN' }
    
        ,{ id: 'VentasCAB', name: 'VENTASCAB', icon: 'view_list', route: '/main/VentasCAB' }
    
        ,{ id: 'VentasLIN', name: 'VENTASLIN', icon: 'view_list', route: '/main/VentasLIN' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ClienteCardComponent

    ,ComprasCABCardComponent

    ,ComprasLINCardComponent

    ,ProductoCardComponent

    ,ProveedorCardComponent

    ,StockTiendaCardComponent

    ,TiendaCardComponent

    ,TraspasosLINCardComponent

    ,VentasCABCardComponent

    ,VentasLINCardComponent

];