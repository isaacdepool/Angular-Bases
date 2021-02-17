import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

nuevo: Personajes = {
  nombre: 'Isaac Depool',
  poder: 0
}

}
