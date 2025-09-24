let numeros = [22, 12, 33, 64, 23];

[n1, n2, n3, n4, n5] = [prompt("Numuero 1: "), prompt("Numuero 2: "), prompt("Numuero 3: "), prompt("Numuero 4: "), prompt("Numuero 5: ")]
let numerosUsuario = [n1, n2, n3, n4, n5];

let opcion = prompt(
  "MENÚ DE OPCIONES\n" +
  "a) Números pares\n" +
  "b) Buscar valor\n" +
  "c) Mostrar números\n" +
  "d) Crear string\n" +
  "e) Borrar elemento\n" +
  "f) Unir arrays\n" +
  "g) Crear nuevo array\n" +
  "h) Sumar a cada elemento\n" +
  "i) Duplicar elementos\n" +
  "j) Guardar en posiciones\n" +
  "k) Mostrar contenido\n" +
  "l) Ordenar contenido\n" +
  "m) Salir\n" +

  "Elige una opción:"
);

opcion = opcion.toLowerCase();

switch (opcion) {
    case "a":
        let numerosPares = [];
        for (let numero of numeros) {
            if (numero % 2 === 0) {
                numerosPares.push(numero);
            }
        }
        document.write("Números pares: " + numerosPares + "<br>");
        break;

    case "b":
        let valor = parseInt(prompt("Introduce un valor a buscar en el segundo array:"));
        let posiciones = [];
        for (let i = 0; i < numeros2.length; i++) {
            if (numeros2[i] === valor) {
                posiciones.push(i);
            }
        }
        if (posiciones.length > 0) {
            document.write(`El valor ${valor} se encontró en las posiciones: ${posiciones}<br>`);
        } else {
            document.write(`El valor ${valor} no se encontró en el array.<br>`);
        }
        break;

    case "c":
        let mayores10 = numeros.filter(n => n > 10);
        document.write("Números mayores de 10: " + mayores10 + "<br>");
        break;

    case "d":
        let cadena = numeros.join(", ");
        document.write("String del array: " + cadena + "<br>");
        break;

    case "e":
        numeros2.shift();
        numeros2.pop();  
        numeros2.splice(1, 1);
        document.write("Array 2 después de borrar: " + numeros2 + "<br>");
        break;

    case "f":
        let arrayUnido = numeros.concat(numeros2);
        document.write("Array unido: " + arrayUnido + "<br>");
        break;

    case "g":
        let numerosImpares = numeros.filter(n => n % 2 !== 0);
        document.write("Números impares: " + numerosImpares + "<br>");
        break;

    case "h":
        let arraySumado = numeros2.map(n => n + 2);
        document.write("Array 2 con +2: " + arraySumado + "<br>");
        break;

    case "i":
        let copiaArray = [...numeros];
        copiaArray.splice(4, 0, numeros[0], numeros[1]);
        document.write("Array con duplicados: " + copiaArray + "<br>");
        break;

    case "j":
        let arraySeis = new Array(numeros2.length).fill(6);
        document.write("Array lleno de 6: " + arraySeis + "<br>");
        break;

    case "k":
        let arrayInvertido = [...numeros].reverse();
        document.write("Array invertido: " + arrayInvertido + "<br>");
        break;

    case "l":
        let arrayOrdenado = [...numeros].sort((a, b) => b - a);
        document.write("Array ordenado (mayor a menor): " + arrayOrdenado + "<br>");
        break;

    case "m":
        document.write("Saliendo del programa...<br>");
        break;

    default:
        document.write("Opción no válida. Por favor elige a, b, c, ..., m.<br>");
}