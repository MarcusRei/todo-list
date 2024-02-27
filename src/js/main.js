let listElement = document.getElementById("ongoing-tasks-container");
let newTaskButton = document.getElementById("create-btn");
let userInput = document.getElementById("input-field");
let sortDButton = document.getElementById("sort-desc-btn");
let sortAButton = document.getElementById("sort-asc-btn");

newTaskButton.addEventListener("click", createNewTask);
sortDButton.addEventListener("click", sortDescending);
sortAButton.addEventListener("click", sortAscending);

let taskList = getFromLocalStorage();

console.log("taskList", taskList);

createHTML();

function createHTML() {
  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    if (task.isCompleted === true) {
      createCompletedElement(task, i);
    } else {
      createIncompleteElement(task, i);
    }
  }
  putInLocalStorage(taskList);
}

function createCompletedElement(task, position) {
  let taskElement = document.createElement("li");
  taskElement.className = "completed";

  let userText = document.createElement("p");
  userText.innerText = task.userInput;
  userText.className = "completed-text";

  let undoButton = document.createElement("button");
  undoButton.innerText = "ångra";
  undoButton.className = "undo-task-btn";
  undoButton.addEventListener("click", () => {
    toggleComplete(task);
  });

  let removeButton = document.createElement("button");
  removeButton.innerText = "Ta bort";
  removeButton.className = "remove-btn";
  removeButton.addEventListener("click", () => {
    removeTask(position);
  });

  taskElement.appendChild(undoButton);
  taskElement.appendChild(userText);
  taskElement.appendChild(removeButton);
  listElement.appendChild(taskElement);
}

function createIncompleteElement(task, position) {
  let taskElement = document.createElement("li");
  taskElement.className = "ongoing";

  let userText = document.createElement("p");
  userText.innerText = task.userInput;
  userText.className = "ongoing-text";

  let doneButton = document.createElement("button");
  doneButton.innerText = "Klar";
  doneButton.className = "complete-task-btn";
  doneButton.addEventListener("click", () => {
    toggleComplete(task);
  });

  let removeButton = document.createElement("button");
  removeButton.innerText = "Ta bort";
  removeButton.className = "remove-btn";
  removeButton.addEventListener("click", () => {
    removeTask(position);
  });

  taskElement.appendChild(doneButton);
  taskElement.appendChild(userText);
  taskElement.appendChild(removeButton);
  listElement.appendChild(taskElement);
}

function toggleComplete(task) {
  console.log("task", task);
  if (task.isCompleted === true) {
    task.isCompleted = false;
  } else {
    task.isCompleted = true;
  }

  listElement.innerHTML = "";
  createHTML();
}

function removeTask(position) {
  console.log(position);
  let updatedList = taskList.splice(position, 1);

  console.log(updatedList);
  putInLocalStorage(updatedList);
  listElement.innerHTML = "";
  createHTML();
}

function createNewTask() {
  if (userInput.value === "") {
    alert("Du måste skriva något i fältet!");
  } else {
    let task = {
      userInput: userInput.value,
      isCompleted: false,
    };
    taskList.push(task);
    console.log(taskList);
    userInput.value = "";
    putInLocalStorage(taskList);
    listElement.innerHTML = "";

    createHTML();
  }
}

function sortDescending() {
  console.log("sort");
  let sortedList = taskList.sort((a, b) =>
    a.userInput.toUpperCase() > b.userInput.toUpperCase() ? 1 : -1
  );

  putInLocalStorage(sortedList);
  listElement.innerHTML = "";
  createHTML();
}

function sortAscending() {
  console.log("sort");
  let sortedList = taskList.sort((a, b) =>
    a.userInput.toUpperCase() < b.userInput.toUpperCase() ? 1 : -1
  );

  putInLocalStorage(sortedList);
  listElement.innerHTML = "";
  createHTML();
}

function putInLocalStorage(list) {
  localStorage.setItem("taskList", JSON.stringify(list));
}

function getFromLocalStorage() {
  let listofStringsFromLS = localStorage.getItem("taskList");
  let taskListfromLS = JSON.parse(listofStringsFromLS);
  console.log("from LS", taskListfromLS);

  if (taskListfromLS !== null) {
    return taskListfromLS;
  } else {
    return [];
  }
}
