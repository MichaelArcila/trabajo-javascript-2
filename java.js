console.log("==================================================");
console.log("==  En esta consola se trabajarán con arreglos  ==");
console.log("==================================================");


console.log("Nota: Se utilizó las funciones de flecha en cada método para trabajar mejor con los arreglos.");


// Se crean los 4 arreglos

let frutas = ["Papaya", "Pera", "Cereza", "Banano", "Fresa"];
let numeros = [10, 20, 30, 40];
let animales = ["Conejo", "Murcielago", "Lobo", "Perro"];
let temperaturas = [30, 40, 23, 20, 47, 15, 8];


//  Concatenar las frutas en una cadena 
let frutasconcatenadas = frutas.reduce((acum, fruta) => acum + ", " + fruta);
console.log("Frutas concatenadas:", frutasconcatenadas);

// Multiplicar todos los números del arreglo
let multiplicacionnumeros = numeros.reduce((acum, num) => acum * num, 1);
console.log("Multiplicación de los números:", multiplicacionnumeros);

// Encontrar el nombre del animal más largo 
let nombremaslargo = animales.reduce((largo, animal) => (animal.length > largo.length ? animal : largo), "");
console.log("Animal con el nombre más largo:", nombremaslargo);


//  Suman las temperaturas
let sumatemperaturas = temperaturas.reduce((acum, temp) => acum + temp, 0);
console.log("Suma de las temperaturas:", sumatemperaturas);

// Frutas que contienen la letra e
let frutascona = frutas.filter(fruta => fruta.includes("e"));
console.log("Frutas que contienen la letra e:", frutascona);

// Números mayores a 25
let mayoresa25 = numeros.filter(num => num > 25);
console.log("Números mayores a 25:", mayoresa25);

// Animales que tienen más de 5 letras
let animales5letras = animales.filter(animal => animal.length > 5);
console.log("Animales con más de 5 letras:", animales5letras);

// Temperaturas menores a 30 grados
let temperaturasmenores = temperaturas.filter(temp => temp < 30);
console.log("Temperaturas menores a 30 grados:", temperaturasmenores);

// Convertir todas las frutas a mayúsculas
let frutasmayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log("Frutas en mayúsculas:", frutasmayusculas);

// Convertir todos los números a su raíz cuadrada
let numerosRaizCuadrada = numeros.map(num => Math.sqrt(num));
console.log("Raíces cuadradas de los números:", numerosRaizCuadrada);

// Convertir todos los animales a minúsculas
let animalesminusculas = animales.map(animal => animal.toLowerCase());
console.log("Animales en minusculas:", animalesminusculas);

// Añadir el símbolo de grados celsius a las temperaturas
let temperaturascongrados = temperaturas.map(temp => `${temp}°C`);
console.log("Temperaturas con el símbolo de grados Celsius:", temperaturascongrados);

// Imprimir cada fruta
frutas.forEach(fruta => console.log("Fruta:", fruta));

// Imprimir cada número
numeros.forEach(num => console.log("Número:", num));

// Imprimir cada animal
animales.forEach(animal => console.log("Animal:", animal));

// Imprimir cada temperatura
temperaturas.forEach(temp => console.log("Temperatura:", temp));







