let usuario = [
    {
        nombre: "Danel",
        password: "12345Abcde"
    }, 
    {
        nombre: "Iker",
        password: "12345678"
    }
];

document.addEventListener("click", validar);

let nombre = document.getElementsByName("nombre");
let password = document.getElementById("pswd");

function validar(nombre, password){
    let erPassword = /^.{8}$/;
    let erNombre = /^.{12}$/;

    if (erNombre.test(nombre)){
        for (let i = 0; i < usuario.length; i++){
            if (nombre == i){

            } else {
                
            }
        }
    } else {
        alert("Nombre incorrecto");
    }
}