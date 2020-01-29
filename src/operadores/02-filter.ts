import { range, from, fromEvent } from "rxjs";
import { filter, tap, map } from 'rxjs/operators';
//? FILTER: PERMITE FILTRAL LOS VALORES DE LA EMISIONES QUE EMITE EL OBSERVABLE
//?  ENCADENAMIENTO DE OPERDORES:  SE PUEDE PONER CUALQUIER CANTDA DE OPERADORES DENTRO DE PIPE       
//?  PERO EL ORDERN ES IMPORTANTE.


//* OBSERVABLE

/* range(1,10).pipe(
    filter(value => value % 2 === 1)  //* Debe ser una condicion que regrese verdadero o falso.
).subscribe(console.log);
 */


range(20 , 30).pipe(
    filter((value, i) =>{ 
        console.log('Index', i);        
        return  value % 2 === 1;
    }) 
//).subscribe(console.log);
)

// * TIPADO

interface Personaje {
    tipo: string,
    nombre: string
};

//* STREAMING DE DATOS
const personajes: Personaje [] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
];

//* OBSERVABLE
from(personajes).pipe(
    filter(p => p.tipo === 'Heroe')
).subscribe(console.log);

//* OBSERVABE   
const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')
                    .pipe(
                        map(event=> event.code), //*Trasnforma la data
                        filter(code => code === 'Enter')
                    );
//* SUBSCRIPTION
keyup$.subscribe(console.log);  