import { fromEvent } from "rxjs";
import { debounceTime, tap, pluck, distinctUntilChanged } from "rxjs/operators";

//? debounceTime:   Nos permite contar cuantas milesimas de segundo han pasado desde la ultima emision y  si estas sobrepasan los parametros que tenemos 
//?                 en los parentesis entonces emitira dicho valor
//?                 permite controlar observables que miten una gran cantida de datos en pco tiempo

//*IBSERVABLE
const click$ = fromEvent<MouseEvent >(document, 'click');

//* SUBSCJPTION
click$
.pipe(
    debounceTime(3000)
);
//.subscribe(console.log);


//* EJEMPLO "

const input = document.createElement('input');
document.querySelector('body').append(input);   

const input$ = fromEvent< KeyboardEvent >(input, 'keyup');

input$
.pipe(
    pluck('target', 'value'), //* OBEjto y prpiedd
    debounceTime(1000),
    distinctUntilChanged()

    
)
.subscribe(console.log);