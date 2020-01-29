import { Observable, Observer } from  'rxjs';  // * Si se extrae de la raiz 'rxjs' , es algo para crear observables

// * CREANDO UN OBSERVER
const observer: Observer<any> = {
    next: value => console.log('Siguiente [Next]: ', value),
    error: error => console.warn('Error [Obs]:', error),
    complete: () => console.info('Completado [Obs]') 
};

// * CREANDO OBSERVABLES

// const obs$ = Observable.create()  -- METODO ESTATICO

const obs$ = new Observable<string>(subs => {  // * CREAR SUBSCRIPCIONES [Algo que  esta pendiente de las emisiones del observable]

    subs.next('Hola') // * Primera emision
    subs.next('Mundo') // * Segunda 
  /*  // Forzar un error
     const a = undefined;
     a.nombre = 'Luis'; */
    subs.complete();
    subs.next('Mundo') // * Este valor no es emitido
    
});

// * SUBSCRIPTION

//obs$.subscribe( resp => console.log(resp)); 

//obs$.subscribe( console.log );

/* obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.error('error: ' , error),
    () => console.info('Completado')   
);
 */


 obs$.subscribe(observer);









