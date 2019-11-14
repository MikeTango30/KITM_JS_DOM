// const button = document.querySelector('button');
// const container = document.querySelector('.container');
//
// const headings = document.querySelectorAll('h3');
// const paragraphs = document.querySelectorAll('p');
//
// const colorBg = document.querySelector('.bg');
// const colorHeading = document.querySelector('.heading');
// const colorParagraph = document.querySelector('.paragraph');
//
//
// button.addEventListener('click', changeColor);
// function changeColor() {
//     container.style.backgroundColor = colorBg.value;
//
//     for (item of headings) {
//         item.style.color = colorHeading.value;
//     }
//     for (item of paragraphs) {
//         item.style.color = colorParagraph.value;
//     }
// }

//Task Manager
const button = document.querySelector('button');
const deleteTask = document.querySelector('button:last-child');
const newTask = document.querySelector('input');
const tasks = document.querySelector('ul');

button.addEventListener('click', addTask);
deleteTask.addEventListener('click', deleteTheTask);

function addTask() {
    const task = document.createElement('li');
    task.textContent = newTask.value;
    tasks.appendChild(task);
}

function deleteTheTask() {
    const lastTask = document.querySelector('li:last-child');
    tasks.removeChild(lastTask);
}
