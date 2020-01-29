import { range, fromEvent } from "rxjs";
import { map, tap, pluck, mapTo } from "rxjs/operators";

//? MAP : NOS PERMITE TRANSFORMAR LO QUE EMITE EL OBSERVABLE EN ALGO QUE NOSOTROS OCUPEMOS, EXTRAER INFROMACION
//?       TRASNFORMARLA O REGRESAR ALGO COMPLETAMENTE DFERENETE.

//? PLCK: CUANDO OCUPAMOS EXTRAER UN VALOR DEL OBJETO QUE ESTAMOS RECIBIENDO Y QUE ESE SEA LA NUEVA EMISION O LA SALIDA DEL OBSERVABLE,
//?       TAMBIEN TRABAJA CON OBETOS ANIDADOS

//?mapTo: PERMITE TRANFORMAR LA ENTRADA EN UNA SALIDA ESPECIFICA, NUMERO, OBJETOS, ETC



//* SUBSCRIPTION
//range(1,5).subscribe(console.log);
/* range(1, 5).pipe(
    tap(value => console.log(value)),
    map<number, number>(value => value * 10)
    //map<number, string>(value => (value * 10).toString())
)
    .subscribe(console.log); */


//* OBSERVABLE
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');


//* APLY OPERATOR
const keyupCode$ = keyup$.pipe(
    map(event => event.code));

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

//* SUBSCRIPTION

/* keyup$.pipe(
        map(event => event.code)
    )
    .subscribe(val =>  console.log('map', val));
 */

keyupCode$.subscribe(code => console.log('map ', code));
keyupPluck$.subscribe(code => console.log('pluck ', code));
keyupMapTo$.subscribe(code => console.log('mapTo ', code));
