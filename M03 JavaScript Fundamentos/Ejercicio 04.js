/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   console.log(num**2);
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
   console.log(num**3);
}
elevarAlCubo(2);

function elevar(num, exponent) {
   console.log(num**exponent);
}
elevar(15,3);

function redondearNumero(num) {
   valor = Math.round(num);
   console.log(valor);
}
redondearNumero(5.53);


function redondearHaciaArriba(num) {
  valor = Math.ceil(num);
  console.log(valor);
}
redondearHaciaArriba(0.35);

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   valor = Math.random();
   console.log(valor);
}
numeroRandom();
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
