import { Component } from '@angular/core';
import { throws } from 'assert';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
})

export class HeroeComponent {
    nombre : string = 'Ironman';
    edad   : number = 20;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad}`; 
    }
    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void{
        this.edad = 80;
        console.log("asdfasdff");
    }
}
