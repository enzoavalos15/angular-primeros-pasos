import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService{    
    
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 33000,
        },
        {
            nombre: 'Vegeta',
            poder: 22000,
        },
    ];
    
    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    
    constructor(){
        console.log('Servicio inicializado');        
    }

    agregarPersonaje( p: Personaje ){
        this._personajes.push( p );
    }
}