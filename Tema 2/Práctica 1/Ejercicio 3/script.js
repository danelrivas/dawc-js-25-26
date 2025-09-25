cEnviar = document.getElementById("enviar");
cBorrar = document.getElementById("borrar");
let respuestas = [];

function crearObjeto(){
    cNombre = document.getElementById("nombre");
    cApellidos = document.getElementById("apellidos");
    cCorreo = document.getElementById("correo");
    cPoblacion = document.getElementById("poblacion");
    cProvincia = document.getElementById("provincia");
    cRadio = document.querySelector("input[name='edad']:checked")
    cCheckbox = document.querySelectorAll("input[name='conocido']:checked")
    
    let respuesta = {
        nombre: cNombre.value,
        apellidos: cApellidos.value,
        correo: cCorreo.value,
        poblacion: cPoblacion.value,
        provincia: cProvincia.value,
        edad: cRadio,
        //Crea un array con los check seleccionados
        conocio: Array.from(cCheckbox).map(ch => ch.value)
    }

    alert("Objeto con nombre " + respuesta.nombre + " creado.");
    respuestas.push(respuesta);
    resetFormulario();
}

function resetFormulario(){
    document.getElementById("formulario").reset();
}

cEnviar.addEventListener("click", crearObjeto);
cBorrar.addEventListener("click", resetFormulario);