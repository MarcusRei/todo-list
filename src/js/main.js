let ListElement = document.getElementById("ongoing-tasks-container");
let newTaskButton = document.getElementById("create-btn");
let userInput = document.getElementById("input-field");

newTaskButton.addEventListener("click", createNewTask);

let taskList = [
  { userInput: "Mata hunden", isCompleted: false, onList: false },
  { userInput: "Mata katten", isCompleted: false, onList: false },
  { userInput: "Hälsa på grannen", isCompleted: false, onList: false },
];

createHTML();

function createHTML() {
  for (let i = 0; i < taskList.length; i++) {
    let taskElement = document.createElement("li");
    let doneButton = document.createElement("button");
    let removeButton = document.createElement("button");
    removeButton.innerText = "Ta bort";
    removeButton.addEventListener("click", removeTask);
    doneButton.innerText = "Klar";
    doneButton.className = "complete-task";

    if (taskList[i].onList == false) {
      taskElement.innerText = taskList[i].userInput;
      taskElement.className = "ongoing-task";
      removeButton.className = "remove-btn";
      taskElement.appendChild(removeButton);
      ListElement.appendChild(taskElement);
      taskElement.appendChild(doneButton);
      taskElement.appendChild(removeButton);
      doneButton.addEventListener("click", completeTask);
      taskList[i].onList = true;
    }

    function completeTask() {
      taskList[i].isCompleted = true;
      console.log(taskList[i]);
      doneButton.removeEventListener("click", completeTask);
      doneButton.addEventListener("click", makeOngoing);

      if (taskList[i].isCompleted === true) {
        taskElement.className = "completed-task";
        doneButton.innerText = "Ångra";
        doneButton.className = "undo-btn";
      }
    }

    function makeOngoing() {
      taskList[i].isCompleted = false;
      console.log(taskList[i]);

      if (taskList[i].isCompleted === false) {
        taskElement.className = "ongoing-task";
        doneButton.innerText = "Klar";
        doneButton.className = "complete-task";
        doneButton.removeEventListener("click", makeOngoing);
        doneButton.addEventListener("click", completeTask);
      }
    }

    function removeTask() {
      taskList.splice(taskList[i], 1);
      ListElement.innerHTML = "";
      console.log(taskList);
      for (let i = 0; i < taskList.length; i++) {
        taskList[i].onList = false;
      }
      createHTML();
    }
  }
}

function createNewTask() {
  if (userInput.value == "") {
    alert("Du måste skriva något i fältet!");
  }

  let task = { userInput: userInput.value, isCompleted: false, onList: false };
  taskList.push(task);
  console.log(taskList);

  createHTML();
}
