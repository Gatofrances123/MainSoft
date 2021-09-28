import { Component , } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';


public description:string;
constructor(){

  this.title= configuracion.titulo;
 this.description = configuracion.description;
}

}



