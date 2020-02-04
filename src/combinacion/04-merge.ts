import { fromEvent,merge } from "rxjs";
import { pluck } from "rxjs/operators";


//? merge:  funcion que recibe uno o mas observables y el resultado es el productos de los ibsrevbale combinados simualtaneamente.
//?         cuando toos los observables se completan se completara la subscripcion.


const kyeup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');

merge(  
        kyeup$.pipe(pluck('type')), 
        click$.pipe(pluck('type')), 
     ).subscribe(console.log);