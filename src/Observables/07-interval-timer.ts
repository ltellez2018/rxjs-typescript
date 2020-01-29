import {  interval, timer } from "rxjs"; // unciones para crear osbervables o algun tipo de tupado

//? NOTA: INTERVALOS QUE TRABAJAN CON INTERVALOS DE TIEMPO Y SON ASYNCRONOS POR NATURALEZA
//?       'INTERVAL', EMITE SUS VALORES CADA CIERTO TIEMPO, HASTA EL FIN DE LOS TIEMPOS, ES DECIR NUNCA SE COMPLETA
//?       'TIMER', EMITIRA SU VALOR  DESPUES DE UN PERIODO DE TIEMPO Y DESPUES SE COMPLETARA    



//* OBSERVER
const observer = {
    next: value =>console.log('next: ', value),
    complete: ()=> console.log('complete')    
};

//* CONSTANTES DE TIEMPO
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds()  + 5);

//* OBSERVABLE
const interval$ = interval (1000) ;
//const timer$    = timer(2000);
//const timer$    = timer(2000,1000); //? INICIA EN 2 SEGUNDOS Y EMITE CADA SEGUNDO
const timer$    = timer(hoyEn5); //? SE PUEDE EJECUTAR A PARTIR DE UNA FECHA

//* SUBSCRIPTION
console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');

