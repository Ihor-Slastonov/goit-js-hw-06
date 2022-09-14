const actionsRef = document.querySelectorAll('#counter button');

const counterValueRef = document.querySelector('#value');

let counterValue = 0;

actionsRef[0].addEventListener('click', () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;   
})

actionsRef[1].addEventListener('click', () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
})
