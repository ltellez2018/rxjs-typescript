import { of } from  'rxjs';
// ? NOTA: 'of', CREA UN OBSERVABLE EN BASE A UN LISATDO DE ELEMENTOS
//?         EMITE LOS VALORES EN SECUENCIA UNO POR UNO DE MANERA 'SYNCRONA',
//?         CUANDO EMITE EL ULTIMO VALOR SE COMPLETA E OBSERVABLE

//* OBSERVABLE
//const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1,2,3,4,5,6],7,8,9);
//const obs$ = of([1,2], {a:1,b:2} ,  function(){}, true, Promise.resolve(true));


//* SUBSCRIPTION
console.log('Inicio del obs$');

obs$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log('Termina la secuencia') 
);

console.log('Fin del obs$');