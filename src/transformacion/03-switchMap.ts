//? switchMap:  Recibe un callback que retorna un observable
//?              ese uevo observabke es el que se va a suscibir par ahcer la nueva emision en la salida
//?              a diferencia del mergeMap las emisiones de sus observables internos son manejas de forma secuencial 
//?              cuando se llama al swithcMap este cancela peticion anterior

// ? OPeradores de aplanamiento.
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";
import { GithubUser } from '../interfaces/gitHub-user.interfaces';
import { GithubUsersResponse } from '../interfaces/gitHub-users.interfaces';

//* REFRENCIAS
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

//*HELPRES
const mostrarUsuarios = (usuarios: GithubUser[]) =>{
    orderList.innerHTML =    "";
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = 'blanck_';
        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        orderList.append(li);
    }

};

body.append( textInput, orderList)

//* OBSERVABLE
const inpur$ = fromEvent< KeyboardEvent >(textInput, 'keyup');

//? El tipado se recomienda al primero y al ultimo
//* SUBSCRIPTION
inpur$.pipe(
    debounceTime< KeyboardEvent >(500), //* Espera 500 ms antes de enviar la peticion
    pluck<KeyboardEvent, string>('target','value'),//* Extra el value del obsejto target
    mergeMap<string, Observable<GithubUsersResponse>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)), //* Ejecutamos una petiion ajax
    pluck<GithubUsersResponse, GithubUser[]>('items')  //* Extrae los items    
);
//.subscribe(mostrarUsuarios);

//* OTRO EJERCICIO

const ulr = 'https://httpbin.org/delay/1?arg=';
inpur$.pipe(
    pluck('target','value'),
    switchMap(texto => ajax.getJSON(ulr + texto))
).subscribe(console.log);




