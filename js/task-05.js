const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputName)

function onInputName() {
    if (inputNameRef.value != '') {
        outputNameRef.textContent = inputNameRef.value.trim();
    } else {
        outputNameRef.textContent = 'Anonymous';
    }
}
