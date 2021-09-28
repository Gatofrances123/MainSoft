import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/models/factura';

@Component({
  selector: 'app-todo-factura',
  templateUrl: './todo-factura.component.html',
  styleUrls: ['./todo-factura.component.css']
})
export class TodoFacturaComponent implements OnInit {
public titulo: String="listado Factura"
public factura : Array<factura>
  constructor() {
    this.factura=[
      new factura(1243 ,78670 , "27/Septiembre/2021"),
      new factura(1244 ,78673 , "27/Septiembre/2021"),
      new factura(1245 ,78676 , "27/Septiembre/2021")
    ];
  }

  ngOnInit(): void {
    console.log(this.factura);
  }

}
