{
    const tasks = [
        {
            content: "Zrób pracę domową",
            done: false,
        },
        {
            content: "Zjedz pierogi",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
 
}

const toggleTaskDone = (tasksIndex) => {
    tasks[tasksIndex].done = !tasks[tasksIndex].done;
    render();

}

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}"
            >
            <button class="js-done">Zrobione ?</button>
            <button class="js-remove">Usuń</button>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
             removeTask(index);
            });
             
        });


        const toggleDoneButton = document.querySelectorAll(".js-done");
        toggleDoneButton.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
             toggleTaskDone(index);
            });
             
        });
    };



 const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
        return;
    }

    addNewTask(newTaskContent);
}
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}