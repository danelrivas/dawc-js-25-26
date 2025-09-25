document.getElementsByClassName("entrar").addEventListener('click', validar);

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
        validarErNombre();
        validarNombre();
        validarErContraseña();
        validarContraseña();
    
    } catch(e){
        alert(e);

    }



    let nombre = document.getElementsByName("nombre");
    let password = document.getElementById("pswd");
    let erPassword = /^[a-zA-Z0-9.,-]{8,}$/; 
    let erNombre = /^[a-zA-Z0-9]{3,}$/;   
    if (!erNombre.test(nombre)) {
        alert("Nombre con formato incorrecto");
        return;
    }

    let usuarioEncontrado = usuario.find(u => u.nombre === nombre);

    if (!usuarioEncontrado) {
        alert("Nombre incorrecto");
        return;
    }

    if (!erPassword.test(password)) {
        alert("Contraseña con formato incorrecto");
        return;
    }

    if (usuarioEncontrado.password === password) {
        alert("Has iniciado sesión");
    } else {
        alert("Contraseña incorrecta");
    }
}
