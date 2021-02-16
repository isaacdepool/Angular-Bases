import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{title}}</h1>
        <h3>La base es de: <strong>{{base}}</strong></h3>

        <span>{{numero}}</span>

        <button (click)="acumular(base)"> + {{base}}</button>
        <button (click)="acumular(-base)"> - {{base}}</button>
    `
})

export class ContadorComponent{

    title: string = 'Contador app';
  numero: number = 10;
  base: number = 2;

  mas(){
    if(this.numero < 30) this.numero = this.numero + 1;    
  }

  menos(){
    if(this.numero > 0) this.numero = this.numero - 1;
  }

  acumular(valor:number){
    this.numero +=  valor;
  }

}