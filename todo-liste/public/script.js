document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.createElement('h1');
    h1.textContent = 'Liste des tâches à réaliser';
    h1.classList.add('titre-centre');
    document.body.appendChild(h1);

    const button1 = document.createElement('button');
    button1.textContent = 'Ajouter +';
    button1.classList.add('button', 'button-ajout');

    const filterSelect = document.createElement('select');
    filterSelect.classList.add('filter-select');

    const optionAll = document.createElement('option');
    optionAll.value = 'all';
    optionAll.textContent = 'Toutes';

    const optionCompleted = document.createElement('option');
    optionCompleted.value = 'completed';
    optionCompleted.textContent = 'Terminées';

    const optionEncours = document.createElement('option');
    optionEncours.value = 'Encours';
    optionEncours.textContent = 'En cours';

    filterSelect.appendChild(optionAll);
    filterSelect.appendChild(optionCompleted);
    filterSelect.appendChild(optionEncours);

    const containerbutton = document.createElement('div');
    containerbutton.classList.add('button-container');
    document.body.appendChild(containerbutton);
    containerbutton.appendChild(button1);
    containerbutton.appendChild(filterSelect);

    const containertache = document.createElement('div');
    containertache.classList.add('tache-containeur');
    document.body.appendChild(containertache);

    function saveTasksToLocalStorage() {
        const tasks = [];
        document.querySelectorAll('.tache').forEach(task => {
            tasks.push({
                text: task.querySelector('.task-text').textContent,
                status: task.dataset.status
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.status));
    }

    function addTaskToDOM(taskName, status = 'Encours') {
        const newTache = document.createElement('div');
        newTache.classList.add('tache');
        newTache.dataset.status = status;

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.style.transform = 'scale()';
        checkbox.checked = (status === 'completed');

        const taskText = document.createElement('span');
        taskText.textContent = taskName;
        taskText.classList.add('task-text');

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-actions');

        const modifyButton = document.createElement('button');
        modifyButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
        modifyButton.classList.add('modify-button');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('delete-button');

        buttonContainer.appendChild(modifyButton);
        buttonContainer.appendChild(deleteButton);

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskText);

        newTache.appendChild(taskContainer);
        newTache.appendChild(buttonContainer);
        containertache.appendChild(newTache);

        checkbox.addEventListener('change', function () {
            newTache.dataset.status = checkbox.checked ? 'completed' : 'Encours';
            saveTasksToLocalStorage();
        });

        modifyButton.addEventListener('click', function () {
            const newTaskName = prompt("Modifiez le nom de la tâche :", taskName);
            if (newTaskName && newTaskName.trim() !== "") {
                taskText.textContent = newTaskName;
                saveTasksToLocalStorage();
            } else {
                alert("Le nom de la tâche ne peut pas être vide.");
            }
        });

        deleteButton.addEventListener('click', function () {
            containertache.removeChild(newTache);
            saveTasksToLocalStorage();
        });
    }

    button1.addEventListener('click', function () {
        const taskName = prompt("Entrez le nom de la tâche :");

        if (taskName && taskName.trim() !== "") {
            addTaskToDOM(taskName);
            saveTasksToLocalStorage();
        } else {
            alert("Le nom de la tâche ne peut pas être vide.");
        }
    });

    filterSelect.addEventListener('change', function () {
        const filterValue = filterSelect.value;
        const tasks = document.querySelectorAll('.tache');

        tasks.forEach(task => {
            if (filterValue === 'all' || task.dataset.status === filterValue) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });

    loadTasksFromLocalStorage();
});
