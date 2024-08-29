function todoApplication() {
  console.log('Her kommer en todo applikasjon.');

  // Henter vi verdien som blir skrivd i input-elementet.
  const todoInput = document.querySelector("#todoInput").value;
  console.log(todoInput);

  // Henter vi ul-elementet
  const todoList = document.querySelector("#todoList");
  console.log(todoList);

  // Lager vi et li-element
  const todoItem = document.createElement("li");
  console.log(todoItem);

  // Gir vi li-elementet tekst innhold fra input-elementet
  todoItem.textContent = todoInput;

  // Gir li-elementet en styling
  todoItem.classList.add("spacing");

  // ul-elementet får li-elementet
  todoList.appendChild(todoItem);

  // Lager vi et button-element
  const deleteButton = document.createElement("button");
  console.log(deleteButton);

  // Gir button-element tekst innhold
  deleteButton.textContent = "Slett";

  // Gir button-element en funksjon med å slette li-element
  deleteButton.addEventListener("click", function () {
    todoItem.remove();
  })

  // Gir vi li-elementet får button-elementet
  todoItem.appendChild(deleteButton);

  const finishButton = document.createElement("button");

  finishButton.textContent = "Ferdig";

  finishButton.addEventListener("click", function (){
    todoItem.style.textDecoration = "line-through";
    todoItem.style.color = "darkgrey";
  })

  todoItem.appendChild(finishButton);
}

const addTodoButton = document.querySelector('#addTodoButton');

addTodoButton.addEventListener('click', todoApplication);
