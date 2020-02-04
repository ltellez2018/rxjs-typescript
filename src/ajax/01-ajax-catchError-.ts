
//? catchError: Sirve para atrapar cualquier error que suceda en el observable
//?             puede retornan un error on un observable [Puede emitir valores y cuando este observable se 
//?             completa  tambien se completa la subscription] inmediatamente .


import { ajax, AjaxError } from "rxjs/ajax";    
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";
//* EJEMPLOS FETCH

const url = 'http://api.github.com/users?per_page=5';

const manejaErrores = (resp: Response   ) => {
    if(!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp;
};
const catchErr = ( err:AjaxError ) => {
    console.warn('error en :' , err.message);
    return of([]);
}

const fetchPromesa = fetch(url);
/* 
fetchPromesa
    .then(resp => resp.json())
    .then(data => console.log('data:' ,data))
    .catch(err => console.warn('Error en usuarios', err)); */


/*     
fetchPromesa
.then(manejaErrores)
.then(resp => resp.json())
.then(data => console.log('data:' ,data))
.catch(err => console.warn('Error en usuarios', err));
     */


     //* AJAX RXJS

  /*    ajax( url )
     .pipe(
         pluck('response'),
         //map(resp => resp.response)
         catchError(err => {
                console.warn('error en :' , err);
                return of([]);
         })
     )
     .subscribe(users => console.log('usuarios ', users)); */

     ajax( url )
     .pipe(
         pluck('response'),
         //map(resp => resp.response)
         catchError(catchErr)
     )
     .subscribe(users => console.log('usuarios ', users));