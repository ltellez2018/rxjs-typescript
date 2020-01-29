import { range  } from 'rxjs';
import { tap, map } from 'rxjs/operators';

//? tap:    AYUDA A VER COMO VA FLUYENDO LA  INFORMACION A TRAVES DE LOS OBSERVABLE  
//?         NOS PERMITE DISPARAr EFECTOS SECUNDARIOS

// * OBSERVABLE
const numeros$ = range(1,5);


//* SUBSCRIPTION
numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(val => val * 10),
    //tap(x=> console.log('despues', x))
    tap( {
        next: valor =>console.log('despues', valor),
        complete: ()=> console.log('Se termino todo')        
    })
).subscribe(
    valor =>  console.log('subs', valor)    
);
