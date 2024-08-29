// Function fra todoApplication.js
function todoApplication() {
  console.log('Her kommer en todo applikasjon.');
}

// Variabel og event listner fra script.js
const addTodoButton = document.querySelector('#addTodoButton');

addTodoButton.addEventListener('click', todoApplication);
