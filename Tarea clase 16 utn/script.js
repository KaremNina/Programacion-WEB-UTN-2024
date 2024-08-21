/*
1)
Crear una funcion que reciba un array de letras y se encargue de devolver un string con todas las letras concatenadas
Ejemplo:
concatenar(['a', 'b', 'c'])
devolvera 'abc'
*/




/*se define la funcion concatenar con el parametro letras*/ 
/*

function concatenar (letras){
    
    let concatenacion = ''
    

    for (let i = 0; i < letras.length; i++){
        concatenacion += letras[i]
    }
    return concatenacion
} 



const caracteres = ['p','r', 'o','g','r','a','m','a','c','i' , 'o', 'n']
concatenacion = concatenar(caracteres)
console.log(concatenacion)
*/

/*2)
Crear una funcion que reciba un array de numeros y devuelva el mayor de todos
Ejemplo:
mayor([2, 3, 4, 5, 6])
devolvera 6
*/


/*Puedes crear una función en JavaScript que reciba un array de números y devuelva el número mayor utilizando el método Math.max() junto con el operador de propagación (...) */
/*function mayor(numeros) {
    return Math.max(...numeros);
    /*math.max : es un metodo que se utiliza para que el array nos devuelva el numero mayor, ... es el metodo de progragacion 
} */
// Ejemplo de uso
/*const resultado = mayor([2, 3, 4, 5, 51]);
console.log( 'el valor maximo es :' + resultado); 
*/



/*3)
Crear una funcion llamada calcular, que reciba una operacion (la cual puede ser '+', '-', '*', '/') y dos numeros y devuelva el resultado de la operacion
Ejemplo:
calcular('+', 2, 3)
devolvera 5
*/


function calcular(operacion, num1, num2) {
    
    if (operacion === '+')  {
    return num1 + num2;
    }
    else if (operacion === '-'){
        return num1 - num2;
    }
    else if (operacion === '*'){
        return num1 * num2;
        
    }
    else if (operacion ===  '/' ){
            return  num1 / num2;
    }
    
    else  {
    return "error, intente nuevamente"
    }

    


}

let operacion = '/'
    let num1 = 9
    let num2 = 0

let resultados= calcular(operacion ,num1,num2);
console.log(resultados)

