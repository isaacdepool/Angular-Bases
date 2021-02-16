import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
 heroeBorrado: string = '';

 borrar(){

  this.heroeBorrado = this.heroes.shift() || '';
 }

}
