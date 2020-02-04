import { ajax } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';
//const url = 'http://api.github.com/users?per_page=5';
//* OBSERVABLE

const obs$ = ajax.get(url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});     
obs$.subscribe(data => console.log('data:' ,data));