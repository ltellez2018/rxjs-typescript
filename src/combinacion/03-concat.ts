import { interval, concat, of } from "rxjs";
import { take } from "rxjs/operators";

//? concat:     Funciona que recibe observable como argymento, emite los valores de cada observable  en secuencia y hasta que cada uno este completo.



const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log)