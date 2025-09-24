let num = prompt("Introduce un numero");
if (num % 2 === 0 ? document.write("Es par") : document.write("Es impar"));

let nota = parseFloat(prompt("Introduce una nota"));
let mensaje;

if (nota >= 0 && nota < 3) {
    mensaje = "Muy deficiente";
} else if (nota >= 3 && nota < 5) {
            mensaje = "Insuficiente";
        } else if (nota >= 5 && nota < 8) {
                    mensaje = "Notable";
                } else if (nota >= 8 && nota <= 10) {
                            mensaje = "Sobresaliente";
                        } else {
                            mensaje = "Número no válido";
                        }
document.write(mensaje);
