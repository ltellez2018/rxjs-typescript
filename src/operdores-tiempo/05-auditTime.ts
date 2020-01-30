import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

//?auditTime:   Emite el ultimo valor que ha sido emitido por el observable en un perdio de
//?              tiempo determinado.

const click$ = fromEvent< MouseEvent >(document, 'click');
click$
.pipe(
    map(({x}) => ({x})),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe(console.log);