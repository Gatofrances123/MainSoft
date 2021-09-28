import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto';
@Component({
  selector: 'app-todo-producto',
  templateUrl: './todo-producto.component.html',
  styleUrls: ['./todo-producto.component.css']
})
export class TodoProductoComponent implements OnInit {
public titulo : String="Listado Producto";
public producto: Array <producto>;
  constructor() {
    this.producto=[
      new producto(15643,"Motor de bombeo" , "250.000$" , 13 ),
      new producto(15643,"Motoreductor" , "500.000$" , 10 ),
      new producto(15643,"Bobinas Preformadas" , "350.000$" , 15 ),
    ]
  }

  ngOnInit(): void {
  }

}
