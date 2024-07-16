// Funcion que en cuanto se declara se ejecuta
// IIFE
// Immediately invoked function expression IIFE

import createCheckButton from "./components/checkComplete.js";
import createDropButton from "./components/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");

// Funcion para crear una tarea
const createTask = (event) => {
  event.preventDefault();
  // Input
  const input = document.querySelector("[data-form-input]");
  // Capturando valor del input
  const value = input.value;
  // Valor a 0 en el input
  input.value = "";

  // Lista
  const list = document.querySelector("[data-list]");

  // Tarea
  const task = document.createElement("li");
  // Agregando los estilos a la card de la tarea
  task.classList.add("card");

  // Contenido de la card "CONTENEDOR"
  const taskContent = document.createElement("div");

  // Agregando clase para los estilos del contenedor de la card
  taskContent.classList.add("content-card");

  // Contenido de la card "CHECK BUTTON"
  taskContent.appendChild(createCheckButton());
  // Contenido de la card "TEXTO"
  taskContent.appendChild(createTextTask(value));

  // Agregando el contenido de la tarea
  task.appendChild(taskContent);

  task.appendChild(createDropButton());

  // Agregando la tarjeta a la lista
  list.appendChild(task);
};

// Evento de escucha
btn.addEventListener("click", createTask);

const createTextTask = (value) => {
  const textContentTask = document.createElement("span");
  textContentTask.classList.add("task");
  textContentTask.innerText = value;
  return textContentTask;
};
