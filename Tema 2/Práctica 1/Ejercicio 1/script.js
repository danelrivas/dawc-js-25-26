document.getElementById("entrar").addEventListener('click', validar);

var usuario = [
    {
        nombre: "Danel",
        password: "12345Abcde"
    }, 
    {
        nombre: "Iker",
        password: "12345678"
    }
];


function validar(){
    try {
        var passwordVal = document.getElementById("pswd").value;
        var nombreVal = document.getElementById("name").value;

        validarErNombre(nombreVal);
        let usuarioEncontrado = validarNombre(nombreVal);
        validarErContraseña(passwordVal);
        validarContraseña(usuarioEncontrado, passwordVal);
    
    } catch(e){
        alert(e);

    }
}

function validarErNombre(nombreVal){
    let erNombre = /^[a-zA-Z0-9]{3,}$/;   
    if (!erNombre.test(nombreVal)) {
        throw "Nombre con formato incorrecto";
    }
}

function validarNombre(nombreVal){
    let usuarioEncontrado = usuario.find(u => u.nombre === nombreVal);
    if (!usuarioEncontrado) {
        throw ("Nombre incorrecto");
    }
    return usuarioEncontrado;
}

function validarErContraseña(passwordVal){
    let erPassword = /^[a-zA-Z0-9.,-]{8,}$/; 
    if (!erPassword.test(passwordVal)) {
        throw "Contraseña con formato incorrecto";
    }
}

function validarContraseña(usuarioEncontrado, passwordVal){
    if (usuarioEncontrado.password === passwordVal) {
        alert("Has iniciado sesión");
    } else {
        throw("Contraseña incorrecta");
    }
}