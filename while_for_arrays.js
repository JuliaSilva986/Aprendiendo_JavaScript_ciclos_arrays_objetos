// Ciclo while

console.log("Ciclo while");
let contador=10;
// while(mientras sea TRUE)
while (contador>0){
    console.log(contador);
    contador=contador-2;
}

// Ciclo for

// Ejercicio-> Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.

console.log("Ciclo for");

// for (inicializacion; condicion mientras sea TRUE; actualizacion)
for (let i=10; i>0; i--){
    console.log(i);
}

// Ejercicio-> Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.
let suma=0;
for(let i=0; i<21; i++){
    if (i%2==0){
        suma=suma+i;
    }
}
console.log(`la suma de los pares del 1 al 20 es: ${suma}`)

// ARRAYS

//push: añadir un elemento al final de un array
let numeros=[1,2,3,4];

numeros.push(5);
console.log(numeros);

//unshift: añadir un elemento al principio

numeros.unshift(0);
console.log(numeros);

//pop(): elimina y devuelve el ultimo elemento

let ultimo=numeros.pop();
console.log(ultimo);
console.log(numeros);

//shift(): elimina y devuelve el primer elemento

let primero=numeros.shift();
console.log(primero);
console.log(numeros);

//length: longitud de un array

console.log(`La longitud del array numeros es ${numeros.length}`);

//PROBLEMA: clasificacion de frutas

let frutas = [
    "manzana", "pera", "uva", "fresa", "platano",
    "manzana", "naranja", "uva", "pera", "manzana",
    "fresa", "platano", "manzana", "uva", "naranja",
    "pera", "fresa", "manzana", "platano", "uva",
    "manzana", "pera", "naranja", "fresa", "manzana",
    "uva", "platano", "pera", "manzana", "fresa",
    "naranja", "uva", "manzana", "pera", "fresa",
    "platano", "manzana", "uva", "pera", "manzana"
];

// Solucion contar las frutas usando filter

let array_manzana=frutas.filter(fruta => fruta === "manzana");
let num_manzana=array_manzana.length;

let array_pera=frutas.filter(fruta => fruta === "pera");
let num_pera=array_pera.length;

let array_uva=frutas.filter(fruta => fruta === "uva");
let num_uva=array_uva.length;

let array_fresa=frutas.filter(fruta => fruta === "fresa");
let num_fresa=array_fresa.length;

let array_platano=frutas.filter(fruta => fruta === "platano");
let num_platano=array_platano.length;

let array_naranja=frutas.filter(fruta => fruta === "naranja");
let num_naranja=array_naranja.length;

console.log(`las veces que se repite manzana es ${num_manzana}, pera es ${num_pera}, uva es ${num_uva}, 
    fresa es ${num_fresa}, platano es ${num_platano} y naranja es ${num_naranja}`);

// Solucion contar las frutas usando while

let cont=0;
let cont_manzana=0;
let cont_pera=0;
let cont_uva=0;
let cont_fresa=0;
let cont_platano=0;
let cont_naranja=0;

while (cont<frutas.length){
    if (frutas[cont]=="manzana"){
        cont_manzana++;
    }else if (frutas[cont]=="pera"){
        cont_pera++;
    }else if (frutas[cont]=="uva"){
        cont_uva++;
    }else if (frutas[cont]=="fresa"){
        cont_fresa++;
    }else if (frutas[cont]=="platano"){
        cont_platano++;
    }else{
        cont_naranja++;
    }
    cont++;
}

console.log(`las veces que se repite manzana es ${cont_manzana}, pera es ${cont_pera}, uva es ${cont_uva}, 
    fresa es ${cont_fresa}, platano es ${cont_platano} y naranja es ${cont_naranja}`);

