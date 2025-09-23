document.write(new Date() + "<br>");

document.write(Date.now() + "<br>");

let años = Date.now() / (1000 * 60 * 60 * 24 * 365);
document.write(años + "<br>");

let suma = new Date();
suma.setFullYear(suma.getFullYear() + 1);
document.write(suma + "<br>");

let nacimiento = new Date(2006, 9, 26);
let hoy = new Date();
let edad = hoy.getFullYear() - nacimiento.getFullYear();
// si todavía no ha cumplido años
let mes = hoy.getMonth() - nacimiento.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--; 
}
document.write(edad + "<br>");

//PEDIR CORREGIR NAVIDAD