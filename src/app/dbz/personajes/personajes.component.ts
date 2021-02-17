import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input() personajes: Personajes[] = [];
  constructor( private dbzSvc: DbzService){
    
  }
  
  get personajes(): Personajes[] {
    return this.dbzSvc.personajes;
  }

}
