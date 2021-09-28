import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing , appRoutingProviders} from '../app/app.routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoClienteComponent } from './todo/todo-cliente/todo-cliente.component';
import { TodoProductoComponent } from './todo/todo-producto/todo-producto.component';
import { TodoFacturaComponent } from './todo/todo-factura/todo-factura.component';
import { TodoDetalleComponent } from './todo/todo-detalle/todo-detalle.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoClienteComponent,
    TodoProductoComponent,
    TodoFacturaComponent,
    TodoDetalleComponent,
    HomeComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    routing,

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
