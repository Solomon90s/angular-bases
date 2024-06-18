import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //? Esto es inyección de dependencias, inyectamos nuestro servicio

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    // ? usamos el operador spread
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character )
  }

}
