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

const removeTask = (index) => {
    tasks.splice(index, 1);
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

        const removeButttons = document.querySelectorAll(".js-remove");
        removeButttons.forEach((removeButttons, index) => {
            removeButttons.addEventListener("click", () => {
             removeTask(index);
            })
             
        })
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