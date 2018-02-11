document.addEventListener('DOMContentLoaded', () => {

    const ul = document.getElementById('taskList');
    const addTask = document.getElementById('addTaskButton');
    const removeCompleted = document.getElementById('removeFinishedTasksButton');

    const counterSpan = document.createElement('span');
    const body = document.querySelector('body');
    body.insertBefore(counterSpan, ul);
    counterSpan.innerText = '0';

    addTask.addEventListener('click', () => {
        let input = document.getElementById('taskInput');

        /* create elements */
        let toAdd = document.createElement('li');
        let h1 = document.createElement('h1');
        let delButton = document.createElement('button');
        let completeButton = document.createElement('button');

        /* check the length of task input */
        if (input.value.length > 5 && input.value.length < 100) {
            h1.innerText = input.value;
            delButton.innerText = 'Delete';
            completeButton.innerText = 'Completed';

            toAdd.appendChild(h1);
            toAdd.appendChild(delButton);
            toAdd.appendChild(completeButton);

            ul.appendChild(toAdd);

        } else {
            alert('Your task should have between 5 and 100 characters');
        }
        // clear input
        input.value = '';

        completeButton.addEventListener('click', () => {
            h1.classList.toggle('completed');
            counterSpan.innerText = ul.querySelectorAll('li > h1:not([class=completed])').length;
        });

        delButton.addEventListener('click', () => {
            ul.removeChild(toAdd);
            counterSpan.innerText = ul.querySelectorAll('li > h1:not([class=completed])').length;
        });
        counterSpan.innerText = ul.querySelectorAll('li > h1:not([class=completed])').length;
    });

    /* Remove finished tasks */
    removeCompleted.addEventListener('click', () => {
        const toRemove = ul.querySelectorAll('li > h1[class=completed]');
        for (let waste of toRemove) {
            ul.removeChild(waste.parentElement);
        }
        counterSpan.innerText = ul.querySelectorAll('li > h1:not([class=completed])').length;
    });
});
