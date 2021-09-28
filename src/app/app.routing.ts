// importar modulos del router de angular
import { Routes , RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//importar los componentes
import {TodoClienteComponent} from './todo/todo-cliente/todo-cliente.component';
import {TodoDetalleComponent} from './todo/todo-detalle/todo-detalle.component';
import { TodoFacturaComponent } from './todo/todo-factura/todo-factura.component';
import { TodoProductoComponent } from './todo/todo-producto/todo-producto.component';
import { HomeComponent } from './home/home.component';


//Aray de rutas
const appRoutes : Routes = [
{ path:'cliente', component:TodoClienteComponent},
{ path:'detalle', component:TodoDetalleComponent},
{ path:'factura', component:TodoFacturaComponent},
{ path:'producto', component:TodoProductoComponent},
{ path : "**", component : HomeComponent}
];

//Exportar el modulo Router
export const  appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
