let asignaturas = new Map();
asignaturas.set("DWEC", "Desarrollo Web en Entorno Cliente");
asignaturas.set("DWES", "Desarrollo Web en Entorno Servidor");
asignaturas.set("DAW", "Despliegue de Aplicaciones Web");
asignaturas.set("ED", "Entornos de Desarrollo");

document.write("Número de asignaturas: " + asignaturas.size + "<br>");
for (let sigla of asignaturas.keys()) {
    document.write(sigla + "<br>");
}
for (let nombre of asignaturas.values()) {
    document.write(nombre + "<br>");
}
for (let [sigla, nombre] of asignaturas.entries()) {
    document.write(sigla + " → " + nombre + "<br>");
}
document.write("¿Está ED? " + (asignaturas.has("ED") ? "Sí" : "No") + "<br>");
document.write("¿Está DWEC? " + (asignaturas.has("DWEC") ? "Sí" : "No") + "<br>");