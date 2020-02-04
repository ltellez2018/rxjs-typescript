//? exhaustMap:   Cuando recibe observable de inemdiato se susbcribe al mismo y emite su valor, pero si otro observable llega este lo ignora
//?                si es es que el observable anterior aun no se completa
//?                solo una subscription activa.


//? Manejo de doble click

import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";


const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');
/* 
click$.pipe(
    switchMap(() => interval$)
).subscribe(console.log);

 */

 
click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log);

