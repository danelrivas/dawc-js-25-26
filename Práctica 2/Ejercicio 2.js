let sueldo = parseFloat(prompt("Cuál es tu sueldo actual?"));
let años = parseInt(prompt("Cuántos años llevas en la empresa?"));

function calcularAumento(sueldo, años){
    if (sueldo < 500 && años >= 10) {
        sueldo = sueldo * 1.20;
        alert("Tu nuevo sueldo es: " + sueldo.toFixed(2));
    } else if (sueldo < 500 && años < 10) {
        sueldo = sueldo * 1.10;
        alert("Tu nuevo sueldo es: " + sueldo.toFixed(2));
    } else {
        alert("Tu sueldo sigue siendo: " + sueldo.toFixed(2));
    }
}

calcularAumento(sueldo, años);