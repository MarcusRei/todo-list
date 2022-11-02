let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");
//Skapar inputfält
let userInput = document.createElement("input");

class Task {
    constructor(userText, completed, onList) {
        this.userText = userText;
        this.completed = completed;
        this.onList = onList;
    }
}

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
//Skapar 2 listor, ongoing och completed
let ongoingTasks = [];
let completedTasks = [];

function addTaskToOngoing() {
    let newTask = new Task(userInput.value, false, false);
    //Stoppar in newTask i ongoing-lista på index 0
    ongoingTasks.push(newTask);
    commitTask();
}

function commitTask() {

    for (let i = 0; i < ongoingTasks.length; i++) {
        console.log();
    
        if (ongoingTasks[i] = false) {
            //Skapar behållare (ongoing-task)
            let newOngoingTask = document.createElement("article");
            newOngoingTask.className = "ongoing-task";
            let ongoingTaskSection = document.getElementById("ongoing-tasks-container");
            ongoingTaskSection.appendChild(newOngoingTask);

            //Skapar checkbox
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            newOngoingTask.appendChild(checkbox);
            checkbox.addEventListener("click", checkboxStatus);

            //Skriver ut userInput
            let userInputElement = document.createElement("p");
            userInputElement.className = "user-text"
            userInputElement.innerText = ongoingTasks[i].userText;
            newOngoingTask.appendChild(userInputElement);

            //Lägger till Ta bort-knapp
            let removeOngoingTaskButton = document.createElement("button");
            removeOngoingTaskButton.innerText = "Ta bort";
            removeOngoingTaskButton.className = "remove-btn";
            newOngoingTask.appendChild(removeOngoingTaskButton);
            removeOngoingTaskButton.addEventListener("click", removeOngoingTask);
        
            //Nollar input-fältet
            userInput.value = "";

            //Tar bort pågående task
            function removeOngoingTask() {
                removeOngoingTaskButton.remove();
                userInputElement.remove();
                checkbox.remove();
                newOngoingTask.remove();
            }
            
        }

    }
    

    

    

    
}

function checkboxStatus() {
    console.log("Klickad");
}






