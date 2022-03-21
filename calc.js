const add = document.getElementById('add-btn');
const sub = document.getElementById('subtract-btn');
const div = document.getElementById('divide-btn');
const multi = document.getElementById('multiply-btn');
const sum = document.getElementById('sum');



const numb1 = 8;
const numb2 = 2;

function addUp() {
    let score = numb1 + numb2;
    sum.textContent = 'Sum: ' + score;
};

function subtract() {
    let score = numb1 - numb2;
    sum.textContent = 'Sum: ' + score;
};

function divide() {
    let score = numb1 / numb2;
    sum.textContent = 'Sum: ' + score;
};

function multiply() {
    let score = numb1 * numb2;
    sum.textContent = 'Sum: ' +  score;
};
