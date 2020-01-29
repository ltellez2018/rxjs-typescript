import {  of, range, asyncScheduler  } from "rxjs";

//? NOTA: 'RANGE' CREA UNA SECUENCIA DE NUMERO EN ABASE A UN RANGO
//?        POR DEFECTO SON SINCRONOS, PERO SE PUEDEN TRANSFROMAR A ASYNCRONOS
//?        AL LLEGAR AL ULTIMO VALOR EL OBSERVABLE SE COMPLETARA




//* OBSERVABLE
//const src$ = of(1,2,3,4,5);  // con of
//const src$ = range(1,5);  //? POSICION INICIAL 1 Y DARA 5 EMICIONES
const src$ = range(1,5, asyncScheduler);  //? TRANSFORMA LA EMICION A ASYNCRONA
//const src$ = range(5);  //? EL START ES OPCIONAL, START = 0


//*  SUBSCRIPTION
console.log('Inicio');

src$.subscribe(console.log);

console.log('Fin');