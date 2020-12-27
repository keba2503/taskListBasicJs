//Variables
const lista = document.querySelector("#lista");
const  tareaInput = document.querySelector("#txtNota");
const boton = document.querySelector("#boton");

//Funciones
function agregarTarea() {
    
};

function comprobarInput() {
   
};

function eliminarTarea() {
   
};


//Eventos

//Agregar Tarea
boton.addEventListener("click", agregarTarea);

//Comprobar input
tareaInput.addEventListener("click", comprobarInput);

//Eliminar tarea 
for (let index = 0; index <= lista.children.length; index++) {
    lista.children[index].addEventListener("click", eliminarTarea);
}

