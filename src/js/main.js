let ListElement = document.getElementById("ongoing-tasks-container");
let newTaskButton = document.getElementById("create-btn");
let userInput = document.getElementById("input-field");
let sortButton = document.getElementById("sort-btn");

newTaskButton.addEventListener("click", createNewTask);
sortButton.addEventListener("click", sortAlphabetically);

class Task {
  constructor(userText, Boolean) {
    this.userText = userText;
    this.isCompleted = Boolean;
  }
}

let taskList = [];

getFromLocalStorage();

if (listFromLS != []) {
  taskList = listFromLS;
}

createHTML();

function createNewTask() {
  //Check if there is input
  if (userInput.value == "") {
    alert("Du måste skriva något i fältet!");
  } else {
    let task = new Task(userInput.value, false);
    taskList.push(task);

    userInput.value = "";

    putInLocalStorage();
    createHTML();
  }
}

function createHTML() {
  //Empties the HTML
  ListElement.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let taskElement = document.createElement("li");
    taskElement.className = "ongoing-task";

    let userText = document.createElement("p");
    userText.innerText = taskList[i].userText;
    userText.className = "ongoing-text";

    //CHECKBOX
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    if (taskList[i].isCompleted) {
      checkbox.checked = true;
      userText.className = "completed-text";
      taskElement.className = "completed-task";
    }

    let removeButton = document.createElement("button");
    removeButton.innerText = "Ta bort";
    removeButton.className = "remove-btn";
    //EventListener
    removeButton.addEventListener("click", () => {
      removeTask(i);
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(userText);
    taskElement.appendChild(removeButton);

    //APPEND WHOLE TASK
    ListElement.appendChild(taskElement);

    checkbox.addEventListener("click", () => {
      completeTask(checkbox, taskList[i], taskElement, userText);
    });
  }
}

function removeTask(taskPos) {
  taskList.splice(taskPos, 1);

  putInLocalStorage();
  createHTML();
}

function completeTask(checkbox, selectedTask, taskElement, userText) {
  if (checkbox.checked) {
    selectedTask.isCompleted = true;

    console.log("bör vara complete ", selectedTask);

    taskElement.className = "completed-task";
    userText.className = "completed-text";
    putInLocalStorage();
  }

  if (!checkbox.checked) {
    selectedTask.isCompleted = false;

    console.log("Bör vara ongoing ", selectedTask);
    taskElement.className = "ongoing-task";
    userText.className = "ongoing-text";
    putInLocalStorage();
  }
}

// -------- Sorting ---------

function sortAlphabetically() {
  taskList.sort(function (x, y) {
    let a = x.userText.toUpperCase(),
      b = y.userText.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  putInLocalStorage();
  createHTML();
}

// -------- LS ---------

function putInLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function getFromLocalStorage() {
  let listofStringsFromLS = localStorage.getItem("taskList");
  listFromLS = JSON.parse(listofStringsFromLS);

  return listFromLS;
}
