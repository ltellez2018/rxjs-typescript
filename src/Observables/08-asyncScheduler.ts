import { asapScheduler, asyncScheduler } from "rxjs";

//?NOTA:    asyncScheduler crea una subscription no un observable, subscribcion es el producto de un suncribe [.subscribe()]
//?          realiza las funciones de un settimeout y un setinterval de javascript pero con mas control


/* setTimeout(() => {
    
}, 3000);

setInterval(()=>{

},3000); */



const saludar = () =>console.log('Hola Mundo');
const saludar2 =  nombre  =>console.log(`Hola Mundo ${nombre}`);

// * TIMEOUT
//asyncScheduler.schedule(saludar, 2000) //* Solo manda la definicion de la funcio
//asyncScheduler.schedule(saludar2, 2000, 'Luis') //* Solo manda la definicion de la funcio

//* SETINTERVAL
const subs = asyncScheduler.schedule(function(state){  //* NO PUEDE SER UNA FUNCION DE FLECHA TIEN QUE SE UNA FUNCION NORMAL
    console.log('state ', state);
    this.schedule(state + 1, 1000)
    
}, 3000, 0);

//* UNSUBSCRIPTION
/* setTimeout(() => {
    subs.unsubscribe();
},6000); */

asyncScheduler.schedule(() => subs.unsubscribe(),6000);