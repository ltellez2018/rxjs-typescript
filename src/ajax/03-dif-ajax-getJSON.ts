import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";


const url = 'https://httpbins.org/delay/1';
//const url = 'http://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError ) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}
//* OBSERVABLE
/* 
const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));     
const obs2$ = ajax(url).pipe(catchError(manejaError));          

obs$.subscribe(data => console.log('getJSON :' ,data));
obs2$.subscribe(data => console.log('ajax:' ,data)); */

//* OBSERVER
const observer = {
    next: value =>console.log('next: ', value),
    error: err =>  console.warn('Error en subscription',err),   
    complete: ()=> console.log('complete') 
};


const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$
.pipe(
    catchError(manejaError) //* MANEJA EL ERROR, PERMITE QUE SE DISPARE EL NEXT Y EL COMPLETE
)
.subscribe(observer);
//obs2$.subscribe(data => console.log('ajax:' ,data));