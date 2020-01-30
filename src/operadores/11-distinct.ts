import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

//? distinct:   DEJA PASAR LOS VALORES QUE NO HAYAN SIDO EMITIDOS PREVIAMENTE POR EL OBSERVABLE
//?             SOLO VALORES DISTINTOS

//* OBSERVER
const observer = {
    next: value =>console.log('next: ', value),
    complete: ()=> console.log('complete')    
};

//* OBSERVABLE
const numeros = of<number|string>(1,'1',1,1,3,3,2,2,4,4,5,3,1,'1');


//*SUBSCRIPTION
numeros
.pipe(
    distinct() //* Usa el operador de equidad (===) de js
)
.subscribe(console.log);


//*
interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
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
    distinct(p => p.nombre) //* Funcion para comparar, Especifica que propiedad del objeto se va a comparar
)
.subscribe(console.log);
