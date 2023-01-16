import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es : <strong> 5 </strong></h3>
        <button (click)="acumular(-2)">- 5 </button>
        <span>{{base}}</span>
        <button (click)="acumular(2)">+ 5 </button>
    `
})

export class ContadorComponent {
    public title: string = 'Contador App';
    numero : number = 20;
    base   : number = 5;
    acumular ( valor: number ){
      if (valor == 2){
        this.base = this.base + 5;
      }else{
        this.base = this.base -5;
      }
    }
}