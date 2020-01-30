import { from } from "rxjs";
import {  distinctUntilKeyChanged } from "rxjs/operators";

//? distinctUntilKeyChanged:   EMITE LOS VALORES SIEMPRE QUE LA PIRPIEDA ESPECIFICADA [key]
//?                            NO SEA IGUAL AL ANTERIOR.


interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {nombre: 'Leonardo'},
    {nombre: 'Leonardo'},
    {nombre: 'Rafael'},
    {nombre: 'Donatelo'},
    {nombre: 'Miguel Angel'},
    {nombre: 'Splinter'},
    {nombre: 'destrutor'},
    {nombre: 'destrutor'},
    {nombre: 'Leonardo'},
    {nombre: 'Leonardo'},
    {nombre: 'Krank'}
]

//* OBSERVABLE

from(personajes)
.pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);
