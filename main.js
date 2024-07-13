const colorArr = ["red", "green", "blue", "orange", "yellow", "purple"];

function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const square = document.querySelector('.block');

setInterval(() => {
    square.style.background = colorArr[getRandomIntInclusive(0, 5)];
}, 500);

setInterval(() => {
    square.style.left = getRandomIntInclusive(0, window.innerWidth - square.offsetWidth) + 'px';
    square.style.top = getRandomIntInclusive(window.innerHeight - square.offsetHeight, 0) + 'px';
}, 1000);