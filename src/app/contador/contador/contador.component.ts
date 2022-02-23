import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: '<h1>{{title}}</h1> <h1>{{base}}</h1><button (click)="acumular(base)"> + {{base}}</button><span>{{number}}</span><button (click)="acumular(- base)"> - {{base}}</button>',
   
})
export class ContadorComponent {
    title: string = 'Contador APP';
    number: number = 10;
    base: number = 5;
  
    acumular(valor: number){
      this.number +=valor;
    }
}