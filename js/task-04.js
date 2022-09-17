const actionsRef = document.querySelectorAll('#counter button');

const counterValueRef = document.querySelector('#value');

let counterValue = 0;

actionsRef[0].addEventListener('click', onDecrement)

actionsRef[1].addEventListener('click', onEncrement)


function onDecrement(event) {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}

function onEncrement(event) {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
}