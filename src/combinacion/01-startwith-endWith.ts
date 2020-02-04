import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

//? starwith:   Nos permite hacer una emision antes de que el bservable empiece a emitir (Aunque sea un avlro sincrono)
//?              Emite un valor antes de que inicen las emisiones del ovservable.


//? endwith:     Nos permite hacer una emision al ultimo, despues de que todos lo  valores hayan sido emuitidos.
//?               Antes de que se complete el observable


//! el of es sincrono por naturaleza
    
const numeros$ = of(1, 2, 3).pipe(
    startWith(0),
    endWith(4)
);
numeros$.subscribe(console.log);