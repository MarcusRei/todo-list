let ListElement = document.getElementById("ongoing-tasks-container");
let newTaskButton = document.getElementById("create-btn");
let userInput = document.getElementById("input-field");
let sortButton = document.getElementById("sort-btn");

newTaskButton.addEventListener("click", createNewTask);
//sortButton.addEventListener("click", sortAlphabetically);

let taskList = [];

class Task {
  constructor(userText, Boolean) {
    this.userText = userText;
    this.isCompleted = Boolean;
  }
}

//getFromLocalStorage();

//createHTML();

function createNewTask() {
  //Check if there is input
  if (userInput.value == "") {
    alert("Du måste skriva något i fältet!");
  } else {
    let task = new Task(userInput.value, false);
    taskList.push(task);

    userInput.value = "";

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

    taskElement.appendChild(userText);
    taskElement.appendChild(checkbox);
    taskElement.appendChild(removeButton);

    ListElement.appendChild(taskElement);

    checkbox.addEventListener("click", () => {
      completeTask(checkbox, taskList[i], taskElement, userText);
    });
  }
}

function removeTask(taskPos) {
  taskList.splice(taskPos, 1);

  createHTML();
}

function completeTask(checkbox, selectedTask, taskElement, userText) {
  if (checkbox.checked) {
    selectedTask.isCompleted = true;

    console.log("bör vara complete ", selectedTask);

    taskElement.className = "completed-task";
    userText.className = "completed-text";
  }

  if (!checkbox.checked) {
    selectedTask.isCompleted = false;

    console.log("Bör vara ongoing ", selectedTask);
    taskElement.className = "ongoing-task";
    userText.className = "ongoing-text";
  }
}

// -------- Sorting ---------

/* function sortAlphabetically() {
  taskList.sort(function (x, y) {
    let a = x.userInput.toUpperCase(),
      b = y.userInput.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  ListElement.innerHTML = "";
  console.log(taskList);
  for (let i = 0; i < taskList.length; i++) {
    taskList[i].onList = false;
  }
  putInLocalStorage();
  getFromLocalStorage();
  createHTML();
} */

// -------- LS ---------

/* function putInLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
} */

/* function getFromLocalStorage() {
  let listofStringsFromLS = localStorage.getItem("taskList");
  taskList = JSON.parse(listofStringsFromLS);
  console.log("Orig", taskList);
  console.log("from LS", taskList);
} */
