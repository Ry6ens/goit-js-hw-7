const removeNumBt = document.querySelector('.js-remove-number');
const addNumBt = document.querySelector('.js-add-number');
const span = document.getElementById('value')

removeNumBt.addEventListener('click', decrement)
addNumBt.addEventListener('click', increment)

let counterValue = 0

function decrement() {
    counterValue -= 1
    span.textContent = counterValue;
}

function increment() {
    counterValue += 1
    span.textContent = counterValue;
}