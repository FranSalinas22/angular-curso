import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  herores: string [] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    // this.herores.shift();
    this.heroeBorrado =  this.herores.shift() || '';
  }

}
