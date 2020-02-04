//? combineLatest:  Es una funcion que nos permite mandar observables como argumentos , combinarlos y emitor los valores de todos  los observables 
//?                 inerno simualtaneamente. Regresa un observable  el cual emite alores hasta que todos losvalores internos hayan emitido por lo menos un valor


import { fromEvent, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

/* 
const kyeup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');

combineLatest(  
        kyeup$.pipe(pluck('type')), 
        click$.pipe(pluck('type')), 
     ).subscribe(console.log);
 */


const input1$ = document.createElement('input');
const input2$ = document.createElement('input');

input1$.placeholder = 'email@gmail.com';
input2$.placeholder = '*******';

input2$.type = 'password';

document.querySelector('body').append(input1$, input2$);




//* HELPER

const getInputSream = (element: HTMLElement) =>
    fromEvent<KeyboardEvent>(element, 'keyup')
        .pipe(
            pluck<KeyboardEvent, string>('target', 'value')
        );

combineLatest(
    getInputSream(input1$),
    getInputSream(input2$)
).subscribe(console.log);