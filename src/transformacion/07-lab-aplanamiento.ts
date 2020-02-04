import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//* HELPER

const peticionHttpLogin = (userPass) => 
                    ajax.post('https://reqres.in/api/login?delay=1',userPass)
                    .pipe(
                        pluck('response','token'),
                        catchError(err=> of('XXX') )
                    )

//* HTML [FORMULARIO]


const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//* Configuraciones

inputEmail.type ='email';
inputEmail.placeholder ='Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type ='password';
inputPass.placeholder ='password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

//*APEND

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//* OBSERVABLE

const submitForm$ = fromEvent<Event>(form,'submit')
                    .pipe(
                        tap(ev => ev.preventDefault()),
                        map( ev => ({
                            email: ev.target[0].value,
                            password: ev.target[1].value
                        })),
                        //mergeMap(peticionHttpLogin)
                        //switchMap(peticionHttpLogin)
                        exhaustMap(peticionHttpLogin)
                    );

submitForm$.subscribe(token => console.log(token));




