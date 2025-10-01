//Hacer el get de los elementos que necesito
let botonAnadir = document.getElementById("añadir");
let botonResetear = document.getElementById("resetear");
let inputElemento = document.getElementById("elemento");
let lista = document.getElementById("lista");

// Cargar desde localStorage al iniciar
window.onload = () => {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.forEach(producto => crearElemento(producto));
};

//Al hacer click en el button de añadir crear el elemento, guardarlo y resetearlo para el siguiente
botonAnadir.addEventListener("click", () => {
    let texto = inputElemento.value.trim();
    if (texto) {
        crearElemento(texto);
        guardarEnLocalStorage();
        inputElemento.value = "";
    }
});

//Al hacer click en el button de resetear vaciar totalmente y eliminar de local
botonResetear.addEventListener("click", () => {
    lista.innerHTML = "";
    localStorage.removeItem("productos");
});

//Crea un elemento li, le coloca el texto recibido en la function y le añade las opciones que debe de tener
function crearElemento(texto) {
    let li = document.createElement("li");
    li.textContent = texto;

    // Editar al hacer click
    li.addEventListener("click", () => {
        li.style.color = "red";
        //inputElemento.value = li.textContent;
    });

    // Eliminar al hacer doble click
    li.addEventListener("dblclick", () => {
        li.remove();
        guardarEnLocalStorage();
    });

    //Añadirlo a la lista
    lista.appendChild(li);
}


function guardarEnLocalStorage() {
    let productos = [];
    lista.querySelectorAll("li").forEach(li => productos.push(li.textContent));
    localStorage.setItem("productos", JSON.stringify(productos));
}