const btn = document.querySelector("[data-form-btn]");

// Funcion para crear una tarea
const createTask = (event) => {
  event.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");

  // Agregando los estilos a la card
  task.classList.add("card");

  input.value = "";
  // Almacenando value las etiquetas html respectivas
  const content = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;
  // Agregandolo al HTML
  task.innerHTML = content;

  list.appendChild(task);

  console.log(value);
  console.log(content);
};

// Evento de escucha
btn.addEventListener("click", createTask);
