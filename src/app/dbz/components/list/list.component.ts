import { Character } from './../../interfaces/character.interface';
import { Component,EventEmitter,Input, Output} from '@angular/core';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  // ? Este sería el valor por defecto si no me mandan NADA
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]



  /*
  ?Creamos un evento para borrar
  ?Vamos a mandar el indice
  ? onDeleteId = index value: number
  */

  //? Creamos el evento para borrar el personaje
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string):void {
    // Hacemos la comprobación, si no tengo el id, no hago nada
    if ( !id ) return;

    //? Llamamos al evento onDeleteId
    this.onDeleteId.emit( id );
  }


}
