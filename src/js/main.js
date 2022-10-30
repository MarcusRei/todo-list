let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");

newButton.addEventListener("click", newTodo);

function newTodo() {
    console.log("Halloj");
    let newInput = document.createElement("input");
    addTaskSection.appendChild(newInput);

    let addButton = document.createElement("button");
    addButton.innerText("Lägg till");
    addTaskSection.appendChild(addButton)

    let removeButton = document.createElement("button");
    newButton.innerText("Ta bort");
    addTaskSection.appendChild(removeButton);
}