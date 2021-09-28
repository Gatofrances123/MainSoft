import { Component, OnInit } from '@angular/core';
import {cliente} from '../../models/cliente';
@Component({
  selector: 'app-todo-cliente',
  templateUrl: './todo-cliente.component.html',
  styleUrls: ['./todo-cliente.component.css']
})
export class TodoClienteComponent implements OnInit {
  public titulo: string="Listado de clientes";
public cliente : Array<cliente>;
  constructor(){
    this.cliente=[
      new cliente(78670,'Juan Pablo' ,'Quintero Casadiego', 'Cra29c#10c-80' , '12/junio/1997' , 3044671675 , 'juanpabloqc@hotmail.com' ),
      new cliente(76415,'Alejandro' ,'zapata Ortiz', 'calle 46b#15-64' , '15/septiembre/1996' , 3112929717 , 'Alejo.Ortiz@Gmail.com' ),
      new cliente(74235,'Juliana' ,'hurtado mira', 'autopista norte con 160' , '03/febrero/1998' , 316258497 , 'juliana_Hurtado@yahoo.com' )
    ];
   }

  ngOnInit(): void {
    console.log(this.cliente);
  }

}
