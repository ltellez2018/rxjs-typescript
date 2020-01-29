import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

//?REDUCE:   APLICA UNA FUNCION ACUMULADORA A LAS EMICIONES DEL OBSERVABLE
//?          EL VALOR SE EMITE HASTA QUE EL OBSERVABLE SE COMPLETA

// * REDUCE JAVA SCRIPT

const numbers = [1,2,3,4,5];
const acumular = (acumualdor:number ,actual:number ) => acumualdor + actual;

    /* const totalReduce = numbers.reduce(acumular,0);
console.log('TotalReduce' , totalReduce); */


// * OBSERVER
interval(500)
.pipe(
    take(6),  // * Completa el observable despues de la cantidad de veces que se le indique
    tap(console.log),
    reduce(acumular)
)
.subscribe({
    next: val => console.log('next',val),
    complete: () => console.log('complete')   
})

