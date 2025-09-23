let dni = prompt("Introduce tu DNI (8 números y 1 letra):");
let dniRegex = /^[0-9]{8}[A-Za-z]$/;
if (dniRegex.test(dni)) {
    alert("DNI correcto");
} else {
    alert("DNI incorrecto");
}

let nombre = prompt("Introduce tu nombre (solo letras y espacios):");
let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/;
if (nombreRegex.test(nombre)) {
    alert("Nombre correcto");
} else {
    alert("Nombre incorrecto");
}

let url = prompt("Introduce una URL (http o https):");
let urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-]*)*\/?$/;
if (urlRegex.test(url)) {
    alert("URL correcta");
} else {
    alert("URL incorrecta");
}

let ip = prompt("Introduce una IP IPv4:");
let ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
if (ipRegex.test(ip)) {
    alert("IP correcta");
} else {
    alert("IP incorrecta");
}

let texto = prompt("Introduce un texto para convertir las vocales en mayúsculas:");
let textoVocalesMayus = texto.replace(/[aeiou]/g, letra => letra.toUpperCase());
alert("Texto con vocales en mayúsculas:\n" + textoVocalesMayus);
