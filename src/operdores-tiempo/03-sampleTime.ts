import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

//? sampleTime:  Nos permite obtener el ultimo valor emitido en un intervalo
//?              de tiempo, el conteo inicia cuando alguien se susbscribe   



const click$ = fromEvent< MouseEvent >(document,'click');

click$
.pipe(
    sampleTime(2000), //* PARA NO SOBRE CARGAR LA MEOMIRA
    map(({x,y}) => ({x,y})),
)
.subscribe(console.log);