let cuentaCorriente = {
    nombre: "Danel Rivas",
    saldo: 5000,
    //Metodo para retirar añadido dentro de antemano
    retirar(incremento){
        alert("Tu nuevo saldo es: " + (saldo - incremento));
    }
}

//Metodo para ingresar añadido fuera posteriormente
cuentaCorriente.ingresar = function(incremento){
    alert("Tu nuevo saldo es: " + (saldo + incremento));
}

let incremento = prompt("Introduce la cantidad deseada:");
cuentaCorriente.ingresar(incremento);
cuentaCorriente.retirar(incremento);