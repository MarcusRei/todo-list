let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");
let removeOngoingTaskButton = document.createElement("button");

let ongoingTasks = [];
let completedTasks = [];

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

function addTaskToOngoing() {
    let newTask = new Task(userInput.value, false, false);
    //Stoppar in newTask i ongoing-lista
    ongoingTasks.push(newTask);
    commitTask();
}

function commitTask() {

    for (let i = 0; i < ongoingTasks.length; i++) {
        //console.log(ongoingTasks[i]);
        if (ongoingTasks[i].userText !== "") {
    
            if (ongoingTasks[i].onList === false) {
                //Skapar behållare (ongoing-task)
                let newOngoingTask = document.createElement("article");
                newOngoingTask.className = "ongoing-task";
                let ongoingTaskSection = document.getElementById("ongoing-tasks-container");
                ongoingTaskSection.appendChild(newOngoingTask);

                //Skapar checkbox
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                newOngoingTask.appendChild(checkbox);
                ongoingTasks[i].completed = checkbox.checked;
                checkbox.addEventListener("click", checkboxStatus);
                if (checkbox.checked === true) {
                    ongoingTasks[i].completed === true;
                }
        

                //Skriver ut userInput
                let userInputElement = document.createElement("p");
                userInputElement.className = "user-text"
                userInputElement.innerText = ongoingTasks[i].userText;
                newOngoingTask.appendChild(userInputElement);

                //Lägger till Ta bort-knapp
                /* function addRemoveButton() {
                    removeOngoingTaskButton.innerText = "Ta bort";
                    removeOngoingTaskButton.className = "remove-btn";
                    newOngoingTask.appendChild(removeOngoingTaskButton);
                    removeOngoingTaskButton.addEventListener("click", removeOngoingTask);
                }
                addRemoveButton(); */
        
                //Nollar input-fältet
                userInput.value = "";

                //Tar bort pågående task
                function removeOngoingTask() {
                    removeOngoingTaskButton.remove();
                    userInputElement.remove();
                    checkbox.remove();
                    newOngoingTask.remove();
                    console.log(ongoingTasks);

                    for (let i = 0; i < ongoingTasks.length; i++) {
                        
                        
                    }
                    checkLists();
                }

                ongoingTasks[i].onList = true;

                function checkboxStatus() {  
                    if (checkbox.checked === true) {
                        let completedTasks = document.getElementById("completed-tasks-container");
                        completedTasks.appendChild(newOngoingTask);
                        newOngoingTask.className = "completed-task";
                        removeOngoingTaskButton.remove();
                        completedTasks.push(newTask);
                         checkLists();
                        }
    
                    if (checkbox.checked === false) {
                        ongoingTaskSection.appendChild(newOngoingTask);
                        newOngoingTask.className = "ongoing-task";
                    }
                
                }
            }
        }
    }

}

function checkLists() {
    console.log("completed");
    console.log(completedTasks);
    console.log("ongoing");
    console.log(ongoingTasks);
}









