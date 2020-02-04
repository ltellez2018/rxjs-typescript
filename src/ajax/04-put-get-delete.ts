import { ajax } from "rxjs/ajax";
//? MANEJO DE PETICIONES AJAX


const url = 'https://httpbin.org/delay/1';

/* ajax.put(url,{
    id: 1,
    nombre: 'Luis'
},{
    'mi-token': 'ABC'
}).subscribe(console.log); */

ajax( {
    url,
    method: 'PUT',
    headers: {'mi-token': 'ABC123'},
    body: { id: 1,Wnombre: 'Luis'}  
    }).subscribe(console.log);