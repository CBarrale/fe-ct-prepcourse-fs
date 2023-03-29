/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if(x===y){
      console.log("true");
   } 
   else{
      console.log("false");
   }
}
sonIguales(6,6);

function tienenMismaLongitud(str1, str2) {
   if(str1===str2){
      console.log("true");
   }
   else{
      console.log("false");
   }
}
tienenMismaLongitud(2,2);

function menosQueNoventa(num) {
   if(num<90){
      console.log("true");
   }
   else{
      console.log("false");
   }
}
menosQueNoventa(50);

function mayorQueCincuenta(num) {
   if(num>50){
      console.log("true");
   }
   else{
      console.log("false");
   }
}
mayorQueCincuenta(60);

function esPar(num) {
   if(num % 2 ===0){
      console.log("true");
   }
   else{
      console.log("false");
   }
}
esPar(4);

function esImpar(num) {
   if(num % 2 !==0){
      console.log("true");
   }
   else{
      console.log("false");
   }
}
esImpar(9);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
