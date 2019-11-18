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
// const button = document.querySelector('button');
// const deleteTask = document.querySelector('button:nth-child(3)');
// const newTask = document.querySelector('input');
// const tasks = document.querySelector('ul');
//
// console.log(deleteTask)
//
// button.addEventListener('click', addTask);
// deleteTask.addEventListener('click', deleteTheTask);
//
// function addTask() {
//     const task = document.createElement('li');
//     task.textContent = newTask.value;
//     tasks.appendChild(task);
// }
//
// function deleteTheTask() {
//     const lastTask = document.querySelector('li:last-child');
//     tasks.removeChild(lastTask);
// }

//Table Generator
function select(selector) {
    return document.querySelector(selector);
}

colNames = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const buttonGenerateTable = select('button');
const rowCount = select(".row-gen");
const colCount = select('.col-gen');
const table = select('table');

buttonGenerateTable.addEventListener('click', generateTable);

function generateTable() {
    //Empty element for first row/column name intersection
    const emptyColName = document.createElement('span');
    table.appendChild(emptyColName);

    //Editable table headers
    for(let i = 0; i < colCount.value; i++) {
        const div = document.createElement('div');
        div.setAttribute("contentEditable", "true");
        const th = document.createElement('th');
        div.textContent = colNames[i].toUpperCase();
        th.appendChild(div);
        table.appendChild(th);
    }

    //Editable row names and cells
    for(let i = 0; i < rowCount.value; i++) {
        const row = document.createElement('tr');
        const rowName = document.createElement('div');

        const editableDiv = document.createElement('div');
        editableDiv.setAttribute("contentEditable", "true");
        editableDiv.textContent = (i + 1).toString() + '.';

        rowName.appendChild(editableDiv);
        table.appendChild(row);
        table.appendChild(rowName);

        for(let i = 0; i < colCount.value; i++) {
            const col = document.createElement('td');

            const editableDiv = document.createElement('div');
            editableDiv.setAttribute("contentEditable", "true");

            col.appendChild(editableDiv);
            table.appendChild(col);
        }
    }
}

