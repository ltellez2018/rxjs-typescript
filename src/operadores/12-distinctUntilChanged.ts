import { of, from } from "rxjs";
import {  distinctUntilChanged } from "rxjs/operators";

//? distinctUntilChanged:   EMITE VALORES SIEMPRE Y CUANDO LA EMICION ANTERIO NO SEA LA MISMA
//?                         

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
    distinctUntilChanged() //* Usa el operador de equidad (===) de js
)
.subscribe(console.log);


//*
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
    //distinctUntilChanged()  //* solo primitios
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre )  //* comparacion
)
.subscribe(console.log);
