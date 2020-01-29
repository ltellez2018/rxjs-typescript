import { of, from } from 'rxjs';

//? NOTA: 'of' toma argumentos y genera una secuencia
//?        from' , crea un observable a aprtir de un aray,  promise, iterator, observable, etc


//* CREAR OSBERVER
const observer = {
    next: val => console.log('next: ' , val),
    complete: ()=> console.log('complete')
};

//*  FUNCION GENERADORADORA ECMA SCRIPT 6
const miGenerador = function*() { //? EMITE EL VALO CADA QUE SE SOLICITE
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

//* OSBERVABLES
//const source$ = from ([1,2,3,4,5]);
//const source$ = of ([1,2,3,4,5]);
//const source$ = of (...[1,2,3,4,5]);
//const source$ = from ('Leonardo');

const source$ = from (fetch('https://api.github.com/users/klerith'));


//* SUBSCRIPTION

//source$.subscribe(observer);

/* source$.subscribe( async (resp) => { //* REGRESA UNA PROMESA
    console.log(resp);
    const dataResp = await resp.json();
    console.log(dataResp);   
}); */

