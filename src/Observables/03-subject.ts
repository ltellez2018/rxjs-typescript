import { Observable, Observer, Subject } from 'rxjs';  // * Si se extrae de la raiz 'rxjs' , es algo para crear observables

// * OBSERVER
const observer: Observer<any> = {
    next: value => console.log(' next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const intervalos = new Observable<number>(subscriber => {

    //* EMITE NUMEROS RANDOM
    const intervalId = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000);

    // * SE EJECUTARA CUANDO SE LLAME LA FUNCION UNSUBCRIBE
    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido');        
    };
});


// * SUBJECT
//? NOTA: EL SUBJECT ES UN TIPO ESPECIAL DE OBSERVABLE, 
//?       TIENE CASTEO MULTIPLE, PUEDE MANTENER MUCHAS SUBSCRIPCIONES, DSITRIBUE LA MISMA INFORMACION
//?       TAMBIEN ES UN OBSERVER
//?       SE PUEDE MANEJAR EL NEXT, ERROR Y COMPLETE
//?       NOS PERMITE TRANSFORMAR UN COLD OBSERVABLE EN UN HOT OBSERVABLE
const subject$ = new Subject();
const subsSubject =  intervalos.subscribe(subject$);

// * SUBSCRIPTION AL SUBJECT

//? AMBAS TENDRAN EL MISMO VALOR
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// ? NOTA: EL CODGO SE ESTARA EJECUTANDO HASTA QUE SE COMPLETE EL SUBSCRIBER Y  SE EJECUTE EL UNSUBSCRIBE


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subsSubject.unsubscribe();   
},3500)


//? NOTA: CUANDO LA DATA ES PRODUCIDA POR EL OBSERVABE EN SI MISMO, ES CONSIDERADO
//?       UN  'COLD OBSERVABLE'. PERO CUANDO LA DATA ES PRODUCIDA 'FUERA' DEL OBSERVABLE
//?       ES LLAMADO 'HTO OBSERVABLE'

