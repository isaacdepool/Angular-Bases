import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  constructor( private dbzSvc: DbzService){

  }

  // @Output() onNewCharacter: EventEmitter<Personajes> = new EventEmitter();

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0
  }
 
  agregar(){

    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.onNewCharacter.emit( this.nuevo );
    this.dbzSvc.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }   
    
  }

}
