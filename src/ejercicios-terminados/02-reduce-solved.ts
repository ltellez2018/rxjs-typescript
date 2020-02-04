import { from } from 'rxjs';
import { tap, filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{

    const acumular = (acumualdor:number ,actual:number ) => acumualdor + actual;
  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
     tap( datos => console.log('tap :' ,datos)),
     filter<any>( dato =>  typeof dato === 'number' ),
     reduce(acumular)
    // Trabajar aquí


  ).subscribe( console.log ) // La salida debe de ser 32



})();

		