import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService{

    constructor(){
    }
    
    private _personajes: Personajes[] = [{
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 9000
      }
    ];

    get personajes(): Personajes[]{
        return [...this._personajes];
    }
    
    nuevo: Personajes = {
      nombre: 'Example',
      poder: 100
    }

    agregarPersonajes( data: Personajes ){
        this._personajes.push(data);
    }
}