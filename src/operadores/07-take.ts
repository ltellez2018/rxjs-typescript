import { of, pipe } from "rxjs";
import { take, tap } from "rxjs/operators";

//? take:  SE USA CUANDO SE REQUIERE LIMITAR LA CANTIDAD DE EMISIONES QUE UN OBSERVABLE PUEDE TENER
//?        DESPUES LLAMARA AL METODO COMPLETE DE LA 'SUNSCRIPCION'


//* OBSERVABLE
const numeros = of(1,2,3,4,5)
                .pipe(
                    tap(console.log)
                );

//* SUBSCRIPTION
numeros.
pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')    
});


