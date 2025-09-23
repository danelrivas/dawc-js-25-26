let cadena = prompt("Introduce una cadena de caracteres");

function mayusMinus(cadena){
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está en mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está en minúsculas");
    } else {
        console.log("La cadena tiene mezcla de mayúsculas y minúsculas");
    }
}

let subcadena = prompt("Introduce la subcadena a buscar");
function comprobarSubcadena(cadena, subcadena){
    if (cadena.includes(subcadena)) {
        console.log(`La subcadena "${subcadena}" está presente`);
    } else {
        console.log(`La subcadena "${subcadena}" NO se encontró`);
    }
}

function cadenaArray(cadena){
    let arrayCaracteres = Array.from(cadena);
    console.log("Array de caracteres:", arrayCaracteres);
}

function cadenaArrayPalabras(cadena){
    let arrayPalabras = cadena.split(" ");
    console.log("Array de palabras:", arrayPalabras);
}

function remplazarVB(cadena){
    let nuevaCadena = cadena.replace(/v/g, "b");
    console.log("Cadena con 'v' reemplazadas por 'b':", nuevaCadena);
}

function longitud20(cadena){
    if (cadena.length < 20) {
        let nuevaCadena = cadena.padEnd(20, ".");
        console.log("Cadena con longitud 20:", nuevaCadena);
    } else {
        console.log("La cadena ya tiene 20 o más caracteres:", cadena);
    }
}

mayusMinus(cadena);
comprobarSubcadena(cadena, subcadena);
cadenaArray(cadena);
cadenaArrayPalabras(cadena);
remplazarVB(cadena);
longitud20(cadena);
