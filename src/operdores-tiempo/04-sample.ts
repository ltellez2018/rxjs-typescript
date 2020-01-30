import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

//? sample: Emite el ultimo valor emitido por el observable hasta que el otro que esta dentro del
//?         operador sample emita un valor



const interval$ = interval( 500 );
const click$    = fromEvent(document,'click');


interval$
.pipe(
    sample(click$) //* Obtiene la muestra de como esta el observable cunado se hace click
)
.subscribe(console.log);