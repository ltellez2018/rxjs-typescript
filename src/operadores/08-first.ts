import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

//? first: SI SE EMPLEA 'SIN CONDICION', SOLO EMITIRA EL PRIMER VALOR Y SE LLAMARA EL METODO COMPLETE DE LA SUBSCRIPCION
//?        LA CONDCION NOS DICE CUANDO SE DEBE COMPLETAR EL OBSERVABLE


//* OBSERVER
const click$ = fromEvent<MouseEvent>(document, 'click');

//* SUBSCRIPTION
//click$.subscribe(console.log);
click$
.pipe(
    tap<MouseEvent>(console.log),
/*     map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    })) */
    map(({clientX, clientY}) => ({clientY,clientX})),
    first( coors => coors.clientY >= 150)
    //first<MouseEvent>( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')    
});