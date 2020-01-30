import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

//?takeUntil:   Recibe como argumento otro observable
//?             cuando el observable pasado por argumento emite un valor (condicion) se completa el 
//?             observer.


//?skip:    permita saltar u omitir x cantidad de emiciones inciales
//?         despues emitira los valores el observable

//* OBSERVER
const observer = {
    next: value =>console.log('next: ', value),
    complete: ()=> console.log('complete')    
};


//* HTML

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);


//* OBSERVABLE
const counter$ = interval(1000);

//* OBSERVABLE
//const clickBtn$ = fromEvent(boton,'click');
const clickBtn$ = fromEvent(boton,'click')
                    .pipe(
                        tap(() => console.log('tap antes del skip')),
                        skip(1), //* Omite el primer clic
                        tap(() => console.log('tap despues del skip'))
                    )


//*SUBSCRIPTION
counter$
.pipe(
    takeUntil(clickBtn$) //* Cuando se da clic se completa la emision
)
.subscribe(observer);