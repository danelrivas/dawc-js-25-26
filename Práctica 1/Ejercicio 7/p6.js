let arrayBi = [
    [3, 5, 0],
    [4, 4, 0],
    [7, 2, 0],
    [10, 12, 0]
];

for (let fila of arrayBi) {
    fila[2] = fila[0] + fila[1];
    document.write(fila[0] + " + " + fila[1] + " = " + fila[2] + "<br>");
}