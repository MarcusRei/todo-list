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
    console.log(task);

    userInput.value = "";

    createHTML();
  }
}

function createHTML() {
  for (let i = 0; i < taskList.length; i++) {
    let taskElement = document.createElement("li");
    let userText = document.createElement("p");
    let doneButton = document.createElement("button");
    let removeButton = document.createElement("button");
    removeButton.innerText = "Ta bort";
    removeButton.addEventListener("click", removeTask);
    doneButton.innerText = "Klar";
    doneButton.className = "complete-task-btn";

    if (taskList[i].onList == false) {
      userText.innerText = taskList[i].userInput;
      userText.className = "ongoing-text";
      taskElement.className = "ongoing-task";
      removeButton.className = "remove-btn";
      taskElement.appendChild(userText);
      taskElement.appendChild(removeButton);
      ListElement.appendChild(taskElement);
      taskElement.appendChild(doneButton);
      taskElement.appendChild(removeButton);
      doneButton.addEventListener("click", completeTask);
      taskList[i].onList = true;
    }
  }
  putInLocalStorage();
}

/* function completeTask() {
  taskList[i].isCompleted = true;
  console.log(taskList[i]);
  doneButton.removeEventListener("click", completeTask);
  doneButton.addEventListener("click", makeOngoing);

  if (taskList[i].isCompleted === true) {
    taskElement.className = "completed-task";
    userText.className = "completed-text";
    doneButton.innerText = "Ångra";
    doneButton.className = "undo-btn";
  }
} */

/* function makeOngoing() {
  taskList[i].isCompleted = false;
  console.log(taskList[i]);

  if (taskList[i].isCompleted === false) {
    taskElement.className = "ongoing-task";
    userText.className = "ongoing-text";
    doneButton.innerText = "Klar";
    doneButton.className = "complete-task-btn";
    doneButton.removeEventListener("click", makeOngoing);
    doneButton.addEventListener("click", completeTask);
  }
} */

/* function removeTask() {
  taskList.splice(taskList[i], 1);
  ListElement.innerHTML = "";
  console.log(taskList);
  for (let i = 0; i < taskList.length; i++) {
    taskList[i].onList = false;
  }
  createHTML();
} */

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
