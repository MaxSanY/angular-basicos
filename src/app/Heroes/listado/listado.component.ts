import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'Antman'];
  heroeBorrado: string = '';


   borrarHeroe():void {
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
