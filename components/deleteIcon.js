const createDropButton = () => {
  const taskDropButton = document.createElement("i");
  taskDropButton.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  taskDropButton.addEventListener("click", dropTask);
  return taskDropButton;
};

const dropTask = (e) => {
  const buttonDropTask = e.target.parentElement;
  buttonDropTask.remove();
};

export default createDropButton;