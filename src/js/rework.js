let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");

newButton.addEventListener("click", newTask);

function newTask() {
    //Skapar input-fält
    let newInput = document.createElement("input");
    addTaskSection.appendChild(newInput);

    //Skapar Lägg till-knapp
    let addButton = document.createElement("button");
    addButton.innerText = "Lägg till";
    addTaskSection.appendChild(addButton)
    addButton.className = "add-btn";
    addButton.addEventListener("click", commitTask);

    //Skapar ta bort-knapp
    let removeButton = document.createElement("button");
    removeButton.innerText = "Ångra";
    addTaskSection.appendChild(removeButton);
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", removeNew);
    newButton.classList.add("hide");

    console.log(task);

    //Ångrar ny todo
    function removeNew() {
        newInput.remove();
        addButton.remove();
        removeButton.remove();
        newButton.classList.remove("hide");
        
    }
}

class Todo {
    constructor(checkbox, userInput, removeButton) {
        this.checkbox = checkbox;
        this.userInput = userInput;
        this.removeButton = removeButton;
    }
}

let task = new Todo();

function commitTask() {
    console.log(task);
}


//Öppna ny todo-modul
/* function newTodo() {
    //Skapar input-fält
    let newInput = document.createElement("input");
    addTaskSection.appendChild(newInput);

    //Skapar Lägg till-knapp
    let addButton = document.createElement("button");
    addButton.innerText = "Lägg till";
    addTaskSection.appendChild(addButton)
    addButton.className = "add-btn";
    addButton.addEventListener("click", commitTask);

    //Skapar ta bort-knapp
    let removeButton = document.createElement("button");
    removeButton.innerText = "Ångra";
    addTaskSection.appendChild(removeButton);
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", removeNew);
    newButton.classList.add("hide");

    //Ångrar ny todo
    function removeNew() {
        newInput.remove();
        addButton.remove();
        removeButton.remove();
        newButton.classList.remove("hide");
        
    }

    //Skapar task i ongoing
    function commitTask() {

        //Förhindrar tomma tasks
        if (newInput.value != "") {

            //Skapar och lägger till ny ongoing task
            let newOngoingTask = document.createElement("article");
            newOngoingTask.className = "ongoing-task";
            let ongoingTaskSection = document.getElementById("ongoing-tasks-container");
            ongoingTaskSection.appendChild(newOngoingTask);
    
             //Lägger till checkbox
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            newOngoingTask.appendChild(checkbox);
            checkbox.addEventListener("click", checkboxStatus);
    
            //Lägger till faktisk text
            let userInput = newInput.value;
            let userInputElement = document.createElement("p");
            userInputElement.className = "user-text"
            userInputElement.innerText = userInput;
            newOngoingTask.appendChild(userInputElement);
            //Nollar input-fältet
            newInput.value = "";

            //Lägger till Ta bort-knapp
            let removeOngoingTaskButton = document.createElement("button");
            removeOngoingTaskButton.innerText = "Ta bort";
            removeOngoingTaskButton.className = "remove-btn";
            newOngoingTask.appendChild(removeOngoingTaskButton);
            removeOngoingTaskButton.addEventListener("click", removeOngoingTask);

            //Kollar om checkboxen är iklickad
            function checkboxStatus() {
                if (checkbox.checked === true) {
                    moveToCompleted();
                } else {
                    moveToOngoing();
                }
            }

            //Tar bort pågående task
            function removeOngoingTask() {
                removeOngoingTaskButton.remove();
                userInputElement.remove();
                checkbox.remove();
                newOngoingTask.remove();
            }

            //Flyttar till completed
            function moveToCompleted() {
                console.log(checkbox.checked);
                let completedTasks = document.getElementById("completed-tasks-container");
                completedTasks.appendChild(newOngoingTask);
                newOngoingTask.className = "completed-task";
                removeOngoingTaskButton.remove();
            }

            //Flyttar tillbaka till ongoing
            function moveToOngoing() {
                let completedTask = document.querySelector(".completed-task");
                ongoingTaskSection.appendChild(completedTask);
                completedTask.className = "ongoing-task";

                //Lägger till ny Ta bort-knapp
                removeOngoingTaskButton.innerText = "Ta bort";
                removeOngoingTaskButton.className = "remove-btn";
                newOngoingTask.appendChild(removeOngoingTaskButton);
                removeOngoingTaskButton.addEventListener("click", removeOngoingTask); 
            }

            

        }
        
    }
} */





