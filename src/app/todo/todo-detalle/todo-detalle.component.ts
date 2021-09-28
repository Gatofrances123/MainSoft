import { Component, OnInit } from '@angular/core';
import { detalle } from 'src/app/models/detalle';
@Component({
  selector: 'app-todo-detalle',
  templateUrl: './todo-detalle.component.html',
  styleUrls: ['./todo-detalle.component.css']
})
export class TodoDetalleComponent implements OnInit {
public titulo:String="listado de detalle ";
public detalle: Array<detalle>
  constructor() {
    this.detalle=[
      new detalle(1520,1565,15643,15,"23.000 $"),
      new detalle(1620,1566,15642,16,"22.000 $"),
      new detalle(1720,1567,15641,17,"21.000 $")
    ];
   }

  ngOnInit(): void {
  }

}
