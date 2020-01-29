import {  fromEvent } from "rxjs";

//? NOTA:  'FROM EVENT', PERMITE CREAR OBSERVABLES EN BASE A UN EVENT TARGET
//?         , ES DECIR EL DOCUMENT
//?          DISPARA UN EVENTO

//*EVENTOS DEL DOM
const scrOne$ = fromEvent<MouseEvent>(document, 'click');
const scrTwo$ = fromEvent<KeyboardEvent>(document, 'keyup');


//* CREANDO OBSERVER
const observer = {
    next: val =>console.log('next ', val)    
};

//* SUBSCRIPTION
//scrOne$.subscribe(event =>{
scrOne$.subscribe(({ x,y }) =>{ //* DESCRUCTURACION
    //console.log('x: ' , event.x, 'y: ', event.y );
    console.log('x: ' , x, 'y: ', y );

});

scrTwo$.subscribe(event => {
    console.log(event.key);    
});

