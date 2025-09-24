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

let botonEntrar = document.getElementsByClassName("entrar")[0];
let nombreInput = document.getElementsByName("nombre")[0];
let passwordInput = document.getElementById("pswd");

botonEntrar.addEventListener("click", function() {
    validar(nombreInput.value, passwordInput.value);
});

function validar(nombre, password){
    let erPassword = /^.{8,}$/; 
    let erNombre = /^.{3,}$/;   

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
