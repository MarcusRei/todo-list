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
  //Empties the HTML
  ListElement.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let taskElement = document.createElement("li");
    taskElement.className = "ongoing-task";

    let userText = document.createElement("p");
    userText.innerText = taskList[i].userText;
    userText.className = "ongoing-text";

    let doneButton = document.createElement("button");
    doneButton.innerText = "Klar";
    doneButton.className = "complete-task-btn";
    //EventListener
    doneButton.addEventListener("click", () => {
      completeTask();
    });

    let removeButton = document.createElement("button");
    removeButton.innerText = "Ta bort";
    removeButton.className = "remove-btn";
    //EventListener
    removeButton.addEventListener("click", () => {
      removeTask(i);
    });

    taskElement.appendChild(userText);
    taskElement.appendChild(removeButton);
    taskElement.appendChild(doneButton);

    ListElement.appendChild(taskElement);
  }
}

function removeTask(taskPos) {
  taskList.splice(taskPos, 1);

  createHTML();
}

function completeTask() {
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
}

function makeOngoing() {
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
