// Creating the variables
const listInput = document.querySelector('input.todo-list');
const button = document.querySelector('button.todo-list');
const list = document.querySelector('ul.todo-list');
const allListItems = document.querySelectorAll('li.todo-list');
const listTitle = document.querySelector('h1.todo-list');
// Array to store months of year
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Executing the list elements on click
button.addEventListener('click', () => {

  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'todo-list');

  // Conditional to check if the input is empty
  if (listInput.value != "") {
    listItem.innerHTML = "<span class='strikethrough'>  " + listInput.value + "  </span>" + '<i class="fa fa-trash-o delete-btn"></i>';
    list.appendChild(listItem);
    listInput.value = "";
  } else {
    alert("Please add some content first");
  }

  // To remove item on element click
  listItem.addEventListener("click", () => {
    list.removeChild(listItem);
  })
  
});

// Having to click to create the elements was annoying me, so this now executes on enter too
listInput.addEventListener("keyup", () => {

  // Apparently, keycode 13 is the enter key
  if (event.keyCode === 13) {
    button.click();
  }

});

function setDate() {

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  listTitle.innerHTML = 
  `${day} ${monthsOfYear[month]} ${year}
  <br>
  Today's to do list:
  `;

}

window.addEventListener('load', () => {

  setDate();

})
