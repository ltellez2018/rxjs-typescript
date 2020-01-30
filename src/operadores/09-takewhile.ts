import { fromEvent } from "rxjs";
import { map, tap, takeWhile } from "rxjs/operators";

//? takewhile:  Recibe valores mientras la condicion se cumpla
//?              posterior a esto cmpleta el observer, el ultimo no se emite por defaul, pero se puede obtener


//* OBSERVER
const observer = {
    next: value =>console.log('next: ', value),
    complete: ()=> console.log('complete')    
};

//* OBSERVABLE
const click$ =  fromEvent<MouseEvent>(document, 'click');

//*SUBSCRIPTION

click$
.pipe(
    //tap(console.log),
    map( ( { x,y } ) => ( { x, y} ) ), //* DESTRUCTURACION
    //takeWhile( ({y}) => y <= 150 )
    takeWhile( ({y}) => y <= 150, true ) //* SE REQUIERE SABER EL ULTIMO VALOR VALIDO
)
.subscribe(observer);


