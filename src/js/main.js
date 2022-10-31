let newButton = document.getElementById("new-btn");
let addTaskSection = document.getElementById("add-task");

newButton.addEventListener("click", newTodo);

//Öppna fönster för ny todo
function newTodo() {

    let newInput = document.createElement("input");
    addTaskSection.appendChild(newInput);

    let addButton = document.createElement("button");
    addButton.innerText = "Lägg till";
    addTaskSection.appendChild(addButton)
    addButton.className = "add-btn";
    addButton.addEventListener("click", commitTask);

    let removeButton = document.createElement("button");
    removeButton.innerText = "Ta bort";
    addTaskSection.appendChild(removeButton);
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", removeNew);

    //Ångrar ny todo
    function removeNew() {
        newInput.remove();
        addButton.remove();
        removeButton.remove();
    }

    function commitTask() {
        //Skapar och lägger till en ny ongoing task
        let newOngoingTask = document.createElement("article");
        newOngoingTask.className = "ongoing-task";
        let ongoingTaskSection = document.getElementById("ongoing-tasks-container");
        ongoingTaskSection.appendChild(newOngoingTask);
    
        //Lägger till checkbox
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        newOngoingTask.appendChild(checkbox);
        checkbox.addEventListener("input", moveToCompleted )
    
        //Lägger till faktisk text
        let userInput = newInput.value;
        let userInputElement = document.createElement("p");
        userInputElement.innerText = userInput;
        newOngoingTask.appendChild(userInputElement);

        //Lägger till en Ta bort-knapp
        let removeOngoingTaskButton = document.createElement("button");
        removeOngoingTaskButton.innerText = "Ta bort";
        newOngoingTask.appendChild(removeOngoingTaskButton);
        removeOngoingTaskButton.addEventListener("click", removeOngoingTask)

        //Tar bort pågående task
        function removeOngoingTask() {
            removeOngoingTaskButton.remove();
            userInputElement.remove();
            checkbox.remove();
        }

        //Flyttar till completed
        function moveToCompleted() {
            let completedTasks = document.getElementById("completed-tasks-container");
            console.log("Fungerar");
            completedTasks.appendChild(newOngoingTask);
            removeOngoingTaskButton.remove();
        }
    }
}





