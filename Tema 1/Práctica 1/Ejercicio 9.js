let telefonos = new Set([
    612345678,
    678678678,
    698123456,
    699111222,
    666555444
]);

for (let tel of telefonos) {
    document.write(tel + "<br>");
}
let buscar = 678678678;
document.write("¿Está el número " + buscar + "? " + (telefonos.has(buscar) ? "Sí" : "No") + "<br>");