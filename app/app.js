//Variables
const lista = document.querySelector("#lista");
const  tareaInput = document.querySelector("#txtNota");
const boton = document.querySelector("#boton");



//Eventos
eventos();

//Agregar Tarea

function eventos () {
    boton.addEventListener("click", agregarTarea);

    //Limpiar input
    tareaInput.addEventListener("click", limpiarInput);
    
    //Eliminar tareas
    recorrerTareas();
    
}



//Funciones


//Recorrer tareas
function recorrerTareas(){
    for (let i = 0; i <= lista.children.length; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}

//agregar Tareas
function agregarTarea(e) {
    e.preventDefault();

    const tarea = tareaInput.value;
    const nuevaTarea = document.createElement("li");
    const enlace = document.createElement("a");
    const contenido = document.createTextNode(tarea);

    if (tarea === "") {
        comprobarInput();
    }
    else {
        //Agregamos contenido al enlace
        enlace.appendChild(contenido);

        //le establecemos un atributo al enlace
        enlace.setAttribute("href", "#");

        //Agregamos el enlace a li
        nuevaTarea.appendChild(enlace);

        nuevaTarea.setAttribute("class", "list-group-item");

        //Agregar li a ul
        lista.appendChild(nuevaTarea);

        //limpiar input
        limpiarInput()

        recorrerTareas();

    }

};

function comprobarInput() {
    tareaInput.setAttribute("placeholder", "Agrega una tarea Valida");
   
};

function eliminarTarea() {
    this.parentNode.removeChild(this);
};

function limpiarInput () {
    tareaInput.value = ""
    tareaInput.setAttribute("placeholder", "");
   
};