import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  /*
  ? En las variables indicar SIEMPRE si es public o private
  ? y el tipo de dato, en esta caso es number
  */
  public counter: number = 10;


  /*
  ? En los métodos indicar si recibe parámetro
  ? y de que tipo es el parámetro que recibe
  ? y el tipo que devuelve
  */
  increaseBy( value: number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }


}
