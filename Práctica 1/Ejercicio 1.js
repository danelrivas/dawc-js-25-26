let n1 = 16;
n1 = 16.678;

document.write("Número original: ", n1);

let parteEntera = Math.trunc(n1); 
document.write("<br>Parte entera: ", parteEntera);

let parteDecimal = n1 - parteEntera; 
document.write("<br>Parte decimal: ", parteDecimal);

let redondeoArriba = Math.ceil(n1); 
document.write("<br>Redondeo hacia arriba: ", redondeoArriba);

let redondeoAbajo = Math.floor(n1); 
document.write("<br>Redondeo hacia abajo: ", redondeoAbajo);

let redondeo = Math.round(n1); 
document.write("<br>Redondeo normal: ", redondeo);

let dosDecimales = n1.toFixed(2);
document.write("<br>Con dos decimales: ", dosDecimales);