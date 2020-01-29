import { Observable, Observer } from  'rxjs';  // * Si se extrae de la raiz 'rxjs' , es algo para crear observables

// * OBSERVER
const observer: Observer<any> = {
    next: value => console.log(' next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete') 
};


const intervalo$ = new Observable<number>(subscriber => {

    // * CREANDO UN CONTADOR
    let contador = 0
    const interval = setInterval(()=>{
        subscriber.next(contador++)
    },1000); // * CADA SEGUNDO

    // * EJECUTA EL COMPLETE
    setTimeout(() => {
        subscriber.complete();
    },2500);

    // * RETORNA DESPUES DEL COMPLETE
    return () =>{
        clearInterval(interval);
        console.log('Intervalo destruido');        
    }
});


// * SUBSCRIPTION
const mySubscription = intervalo$.subscribe( observer );
const my2Subscription = intervalo$.subscribe( observer );
const my3Subscription = intervalo$.subscribe( observer );

// ? NOTA: CUANDO UNO SE SUBSRIBE AL OBSERVABLE SE CREA UNA NUEVA INSTANCIA Y STREAMING DE DATOS.
// ? NOTA: EL UNSUSCRIBE NO ES LO MISMO QUE EL METODO COMPLETE

//* 
mySubscription.add(my2Subscription).add(my3Subscription); // * SOLO EJECUTA EL COMPLETE DE LA PRIMERA SUBCRIPTION

// * CANCELAR SUBSCRIPTION

setTimeout(() => {
    mySubscription.unsubscribe(); 
/*  mySubscription.unsubscribe();
    my2Subscription.unsubscribe();
    my3Subscription.unsubscribe(); */
    console.log('Completado timeout');   
},6000)