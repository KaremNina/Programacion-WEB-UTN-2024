/*
consigna= Crear una funcion llamada sumatoria(cantidad) que recibira un numero llamado cantidad y la funcion solicitara la cantidad de numeros que se indique en el parametro cantidad y los sumara

let cantidad = (prompt ("¿Cuantos numeros deseas sumar?"));

// Verificar si el valor ingresado es un número válido
while(isNaN(cantidad)|| cantidad ==='') {
    alert("error, debe ser un numero")
    cantidad=Number(prompt("Ingrese el numero correctamente"))
}

function sumatoria (cantidad) {  //declaramos la funcion 
    //bucle a repetir
    let sumaTotal = 0;
    for (let i = 0; i < cantidad; i++) {
    
        let numero_ingresado = (prompt ("Ingrese un numero"));
     // Verificar si el valor ingresado es un número válido
    while(isNaN(numero_ingresado)||numero_ingresado==='') {
        alert("error, debe ser un numero")
        numero_ingresado=Number(prompt("Ingrese el numero correctamente"))
        
    
    }


    sumaTotal = sumaTotal + Number(numero_ingresado) // resultado
    }
    alert("El resultado de la sumatoria es : " + sumaTotal)
        
} 

sumatoria(cantidad)       
*/

//consigna= Crear una funcion llamada saludar(nombre), dicha funcion recibira un nombre y retornara un string que sea 'hola {nombre}'
//Ejemplo:
//saludar('pepe') retornara el string 'hola pepe'

/*let nombre = prompt('Ingresa tu nombre')
function saludar(nombre){
    return ("Hola " + nombre)
}
let saludo = saludar(nombre)
alert(saludo)
*/


/*Crear una funcion llamada seleccionar, la misma recibira un string y retornara un valor en base al string recibido */


function seleccionar(operación){
    return "La operación elegida es: " + operación
}

let operación =  prompt("seleccione una operación matematica: ")
if (operación === "sumar" || operación === "+" || operación ==="add"){
    alert("SUMAR")
}else if(operación === "restar" || operación === "-" || operación=== "substract"){
    alert("RESTAR")
}else if (operación === "multiplicar" || operación === "*"|| operación=== "multiply"){
    alert("MULTIPLICAR")
}else{
    alert("NULL")
}    


