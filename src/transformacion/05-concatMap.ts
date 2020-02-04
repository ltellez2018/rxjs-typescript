import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap } from "rxjs/operators";

//? concatMap:  Concatena los observable resultantes que puede fluir atravez de se operador
//?              concatena la emisiones del primer observador con las del segundo siempre y cuanoo el primero se haya completadp                
//?               maneja una cola de espera

//? Operadores de aplanamiento: cuando se recibe un observable[interno ] automaticamente se subcribe a el



const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');
/* 
click$.pipe(
    switchMap(() => interval$)
).subscribe(console.log);

 */

 
click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log);

