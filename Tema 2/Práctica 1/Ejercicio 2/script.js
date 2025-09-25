function generarDias(){
    const dias = document.getElementById("dias");

    for (let i = 1; i <= 31; i++){
        const div = document.createElement('div');
        div.className = 'dia';
        div.textContent = i.toString().padStart(2, '0');

        div.addEventListener('click', () => {
            const otros = dias.querySelectorAll('.dia.selected');
            otros.forEach(d => d.classList.remove('selected'));

            div.classList.add('selected');
        });

        dias.appendChild(div);
    }
}

function guardarTarea(){
    const input = document.getElementById("tareaInput");
    const texto = input.value.trim();
    if (!diaSeleccionado) {
        alert("Selecciona primero un día");
        return;
    }
    if (texto === "") return;

    if (!tareasPorDia[diaSeleccionado]) {
        tareasPorDia[diaSeleccionado] = [];
    }

    tareasPorDia[diaSeleccionado].push(texto);
    input.value = '';

}

function mostrarTareas(){
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = ''; // limpiar lista anterior

    if (!diaSeleccionado) {
        alert("Selecciona primero un día");
        return;
    }

    const tareas = tareasPorDia[diaSeleccionado] || []; // array vacío si no hay tareas
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea;
        lista.appendChild(li);
    });
}

generarDias();
document.getElementById("guardarTarea").addEventListener('click', guardarTarea);
document.getElementById("mostrarTareas").addEventListener('click', mostrarTareas);