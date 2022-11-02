let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");
let removeOngoingTaskButton = document.createElement("button");

//Skapar inputfält
let userInput = document.createElement("input");

class Task {
    constructor(userText, completed) {
        this.userText = userText;
        this.completed = completed;
    }
}

let ongoing = [];
let completed = [];

newButton.addEventListener("click", newTask);

function newTask() {
    //Lägger till input-fältet i DOM:en
    addTaskSection.appendChild(userInput);

    //Skapar Lägg till-knapp
    let addButton = document.createElement("button");
    addButton.innerText = "Lägg till";
    addTaskSection.appendChild(addButton)
    addButton.className = "add-btn";
    addButton.addEventListener("click", addTaskToOngoing);

    //Skapar ta bort-knapp
    let removeButton = document.createElement("button");
    removeButton.innerText = "Ångra";
    addTaskSection.appendChild(removeButton);
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", removeNew);
    newButton.classList.add("hide");

    //Ångrar ny todo
    function removeNew() {
        userInput.remove();
        addButton.remove();
        removeButton.remove();
        newButton.classList.remove("hide");
        
    }
}

function addTaskToOngoing() {
    if (userInput.value !== "") {
        let newTask = new Task(userInput.value, false);
        ongoing.push(newTask);
        console.log(ongoing);
        addOngoingHTML();
        userInput.value = "";
    }
}

function addOngoingHTML() {
    for (let i = 0; i < ongoing.length; i++) {    
        //Container
        let newOngoingTask = document.createElement("article");
        newOngoingTask.className = "ongoing-task";
        let ongoingTaskSection = document.getElementById("ongoing-tasks-container");
        ongoingTaskSection.appendChild(newOngoingTask);
        //Checkbox
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        newOngoingTask.appendChild(checkbox);
        //Faktisk text i task
        let userInputElement = document.createElement("p");
        userInputElement.className = "user-text"
        userInputElement.innerText = ongoing[i].userText;
        newOngoingTask.appendChild(userInputElement);

        
        console.log(ongoing);
        console.log(completed);
    }

    

    
}











