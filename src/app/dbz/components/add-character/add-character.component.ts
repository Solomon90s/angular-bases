import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter():void {
    console.log(this.character);

    //! Esto es el modo debug para depurar el código y ver como funciona
    // debugger;

    if (this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // ? lo hacemos para limpiar los inputs
    this.character.name = '';
    this.character.power = 0;

  }

}
