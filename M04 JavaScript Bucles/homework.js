/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if(x > y)
   console.log(x);
   if(y > x)
   console.log(y);
   else if(x == y)
   console.log(x || y);
   }
   obtenerMayor(5, 7);
function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad>18)
   console.log("allowed");
   else{
      console.log("not allowed");
   }
}
mayoriaDeEdad(19);
mayoriaDeEdad(15);

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if(status == 1)
   console.log("online");
   else if(status == 2)
   console.log("away");
   else{
      console.log("offline");
   }
}
conection (1);
conection (2);
conection (3);

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if(idioma == "aleman")
   console.log("guten tag!");
   else if(idioma == "mandarin")
   console.log("ni hao!");
   else if(idioma == "ingles")
   console.log("hello!");
   else{
      console.log("hola!");
   }
}
saludo ("aleman");
saludo ("mandarin");
saludo ("ingles");
saludo ("frances");

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   if(color == "blue")
   console.log("thi is blue");
   else if(color == "red")
   console.log("thi is red");
   else if(color == "green")
   console.log("thi is green");
   else if(color == "orange")
   console.log("thi is orange");
   else{
      console.log("color not found");
   }
  }
colors ("blue");
colors  ("red");
colors ("green");
colors ("orange");
colors ("yellow");

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num == 10)
   console.log("true");
   else if(num == 5)
   console.log("true");
   else{
         console.log("false");
      }
   
}
esDiezOCinco (8);
esDiezOCinco (5);
function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num>20 && num <50)
   console.log("true");
   else{
      console.log("false");
   }
}
estaEnRango (5);
estaEnRango(30);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 3 === 0)
   console.log("fizz");
   else if(num % 5 === 0)
   console.log("buzz");
   if(num % 3 && num % 5 === 0)
   console.log("fizzbuzz");

}
fizzBuzz(18);
fizzBuzz(10);
fizzBuzz(15);

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1> num2 && num1 > num3 && num1> 0)
   console.log("numero 1 es mayor y positivo");
   else if(num1 < 0 || num2 < 0 || num3 < 0)
   console.log("hay negativo");
   if(num3 > num1 && num3 > num2)
   console.log(num3 +1);
   else if(num1 === 0 && num2 === 0 && num3 === 0)
   console.log("error");
   
   

}
operadoresLogicos(5, 2, 3);
operadoresLogicos(-5, 2, 2);
operadoresLogicos(1, 2, 3);
operadoresLogicos(0, 0, 0);


function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num < 2){
      j=0
      if(num < 2){
         console.log("false");}
         for (i = 1; i <= num; i++)
            if (num % i === 0){
                j++}
         if(j<=2){
           console.log("false");}
      } else console.log("true");
      
}
esPrimo(1);
esPrimo(9);
esPrimo(11);
esPrimo(7);
function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor == 1)
   console.log("soy verdadero");
   else{
      console.log("soy falso");
   }
}
esVerdadero(1);
esVerdadero(5);

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
