const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

// Funcion para crear una tarea
const createTask = (event) => {
  event.preventDefault();
  console.log("Se le dio click al boton");
};

// Evento de escucha
btn.addEventListener("click", createTask);
