import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

//? mergeMap:   La salida es el producto de la subscription de sus observables internos



const letras$ = of('a', 'b', 'c');

//* OBSERVABLE
letras$
    .pipe(
        mergeMap((letra) => interval(1000)
            .pipe(
                map(i => letra + i),
                take(3)
            ))
    )
/* .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')    
});  */


const mousedown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
    .pipe(
        mergeMap( () => interval$.pipe(
          takeUntil(mouseUp$)  
        ) )
    )   
    .subscribe(console.log);
