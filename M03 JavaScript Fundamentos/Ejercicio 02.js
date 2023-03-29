/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y){
   console.log(x + 5);
 }

 suma(8);




function resta(x, y) {
   console.log(x - 2);
}
resta(4);

function divide(x, y) {
   console.log(x / 3);
}
divide(9);

function multiplica(x, y) {
   console.log(x * 4);
}
multiplica(3);

function obtenerResto(x, y) {
   console.log(x % 5);
}
obtenerResto(21);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
