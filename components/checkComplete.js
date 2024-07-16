

const createCheckButton = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");
  i.addEventListener("click", completeTask);
  return i;
};

const completeTask = (e) => {
  const element = e.target;
  element.classList.toggle("far");
  element.classList.toggle("fas");
  element.classList.toggle("complete-icon");
};

export default createCheckButton;