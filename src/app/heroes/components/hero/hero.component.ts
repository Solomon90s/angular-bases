import { Component, Pipe } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  public url: string = 'https://v17.angular.io/guide/interpolation';

  /*
  ? Función que muestra la información del hero
  ? si por defecto no le indicamos nada es public
  */
  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name = 'Batman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }



}
