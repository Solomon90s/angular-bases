import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  /*
  ? El array de personajes
  ? es del tipo de dato de NUESTRO INTERFACE LLAMADO
  ? character.interface.ts
  */

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter( character: Character ):void {

    /*
    ? Estamos haciendo uso del operador spread
    ? Coge todas las propiedades y
    ? esparcerlas en el nuevo objeto que estoy creando
    */
    const newCharacter: Character = {id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  deleteCharacterById( id:string ) {
    /*
    ! Con el filter lo que hacemos es devolver un nuevo array
    ! Con la condición que le digamos
    ! Devolverá el id que no cumple con la condición
    */
    this.characters = this.characters.filter( character => character.id !== id);
    console.log(id);

  }

}
