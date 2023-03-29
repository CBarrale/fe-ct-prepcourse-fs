/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num > 0){
      console.log("es positivo");
   }else if(num < 0){
      console.log("es negativo");
   }
   else {
      console.log("false");
   }
}
esPositivo(5);
esPositivo(-1);
esPositivo(0);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   if(str = "hola mundo")
   console.log(str + "!");
}
agregarSimboloExclamacion("hola mundo");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   var nombre = 'Cristian' 
   var apellido = ' Barrale'
   console.log(nombre + apellido);
}
combinarNombres('nombre, apellido');

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   if(nombre === ' gollo')
   console.log("hola" + nombre);
}
obtenerSaludo(' gollo');

function obtenerAreaRectangulo(alto, ancho) {
   if(alto, ancho)
   console.log(alto *ancho);
}
obtenerAreaRectangulo(5, 7);

function retornarPerimetro(lado) {
   if(lado *4)
   console.log(lado);
}
retornarPerimetro(4*4);

function areaDelTriangulo(base, altura) {
   if(base, altura /2);
   console.log(base * altura);
}
areaDelTriangulo(12,15 /2);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   if(euro === 1.20)
   console.log(euro /1.20);
}
deEuroAdolar(5);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if(letra === 'a', 'e', 'i', 'o', 'u') {
      console.log("es vocal");
   } else {
      console.log("Dato incorecto");
   }
}
esVocal('a');
esVocal('c');
esVocal('hola');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
