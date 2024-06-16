import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Batman', 'Loki']

  // El ? significa que es opcional
  public deletedHero?: string;

  // función para borrar el último elemento del array
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop()
  }

}
