// Creating the variables
const listInput = document.querySelector('input.todo-list');
const button = document.querySelector('i.todo-list');
const ul = document.querySelector('ul.todo-list');

// Executing the list elements on click
button.addEventListener('click', () => {
  
  const listItem = document.createElement('li');

  // Conditional to check if the input is empty
  if (listInput.value != "") {
    listItem.innerHTML = listInput.value;
    ul.appendChild(listItem);
    listItem.innerHTML += '<i class="fa fa-trash-o delete-btn"></i>';
    listInput.value = "";
  } else {
    alert("Please add some content first");
  }
  
});

// Having to click to create the elements was annoying me, so this now executes on enter too
listInput.addEventListener("keyup", () => {

  // Apparently, keycode 13 is the enter key
  if (event.keyCode === 13) {
    button.click();
  }

});