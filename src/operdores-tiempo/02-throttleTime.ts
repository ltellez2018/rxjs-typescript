import { fromEvent, AsyncSubject, asyncScheduler } from "rxjs";
import { throttleTime, tap, pluck, distinctUntilChanged } from "rxjs/operators";

//? throttleTime:      Cuando recibe una emision, inicia el conteo con el parametro como argumento, por lo cual ignora las demas emiciones 
//?                     hasta que se transcurra el parametro  de tiempo.



//*IBSERVABLE
const click$ = fromEvent<MouseEvent >(document, 'click');

//* SUBSCJPTION
click$
.pipe(
    throttleTime(3000)
);
//.subscribe(console.log);


//* EJEMPLO "

const input = document.createElement('input');
document.querySelector('body').append(input);   

const input$ = fromEvent< KeyboardEvent >(input, 'keyup');

input$
.pipe(
    throttleTime(1000 ,asyncScheduler, {
        leading:true,
        trailing: true
    }),
    pluck('target', 'value'), //* OBEjto y prpiedd
    distinctUntilChanged()    
)
.subscribe(console.log); 