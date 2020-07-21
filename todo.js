const listInput = document.querySelector('input.todo-list');
const button = document.querySelector('button.todo-list');
const ul = document.querySelector('ul.todo-list');

button.addEventListener('click', () => {
  const listItem = document.createElement('li')
  listItem.innerHTML = listInput.value;
  ul.appendChild(listItem);
  listInput.value = "";
});