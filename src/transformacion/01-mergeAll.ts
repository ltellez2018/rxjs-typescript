//? mergeAll:   Sirve para trabajar con obseervables que internamente retornan observables
//?             hace  un merge de las emisiones de todos lo observables, no completara la subscription hasta que
//?             que todos lo observables internos se hayan completadp

// ? OPeradores de aplanamiento.
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
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
    map<string, Observable<GithubUsersResponse>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)), //* Ejecutamos una petiion ajax
    mergeAll<GithubUsersResponse>(),//* Maneja el osbservable
    pluck<GithubUsersResponse, GithubUser[]>('items')  //* Extrae los items    
).subscribe(mostrarUsuarios);




