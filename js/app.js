const button = document.querySelector('button');
const container = document.querySelector('.container');

const headings = document.querySelectorAll('h3');
const paragraphs = document.querySelectorAll('p');

const colorBg = document.querySelector('.bg');
const colorHeading = document.querySelector('.heading');
const colorParagraph = document.querySelector('.paragraph');


button.addEventListener('click', changeColor);
function changeColor() {
    container.style.backgroundColor = colorBg.value;

    for (item of headings) {
        item.style.color = colorHeading.value;
    }
    for (item of paragraphs) {
        item.style.color = colorParagraph.value;
    }
}


/*
Fonas
h teksto spalva
p teksto spalva
 */