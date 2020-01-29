import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

//? SCAN:   FUNCIONA IGUAL AL OPERADOR REDUCE,   EL VALOR VA SALIENDO CONFORME VA
//?         INGRESANDO, REGRESA EL VALRO ACUMULADO, NO HASTA QUE SE COMPLETE EL OBSERVABLE


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, curr)=> acc + curr;


//* REDCUE

from( numeros )
.pipe(  
    reduce(totalAcumulador,0)
)
.subscribe(console.log);


//* SCAN

from( numeros )
.pipe(  
    scan(totalAcumulador,0)
)
.subscribe(console.log);


// REDUX
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number,

}
const user : Usuario [] = [
    { id: 'luis', autenticado: false, token:null },
    { id: 'luis', autenticado: true,  token: 'abc' },
    { id: 'luis', autenticado: true, token:'abc123' }
];


const state$ = from<Usuario[]>(user).pipe(
    scan<Usuario>((acc,cur) => {
        return  {...acc, ...cur}
    },{edad:33})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);
