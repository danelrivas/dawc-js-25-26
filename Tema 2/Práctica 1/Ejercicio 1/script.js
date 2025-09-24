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

let botonEntrar = document.getElementsByClassName("entrar");
botonEntrar.addEventListener("click", validar());

let nombre = document.getElementsByName("nombre");
let password = document.getElementById("pswd");

function validar(nombre, password){
    let erPassword = /^.{8}$/;
    let erNombre = /^.{12}$/;

    if (erNombre.test(nombre)){
        for (let i = 0; i < usuario.length; i++){
            if (nombre == i[nombre]){
                if (erPassword.test(password)){
                    if (password == i[password]){
                        alert("Has iniciado sesión");
                    } else{
                        alert("Contraseña incorrecta");
                    }
                } else {
                    alert("Contraseña con er incorrecta");
                }
            } else {
                alert("Nombre incorrecto");
            }
        }
    } else {
        alert("Nombre con er incorrecto");
    }
}