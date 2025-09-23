let texto = "hola";

let mayusculas = texto.toUpperCase();
document.write(mayusculas + "<br>");

document.write(texto.charAt(2) + "<br>");
//l ya que empieza con 0
document.write(texto.charAt(4) + "<br>");
//Vacio

let frase = texto + ", buenos días. <br>"
document.write(frase);

let caracteres = frase.slice(3,6);
document.write(caracteres);