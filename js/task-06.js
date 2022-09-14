const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputValid);

function onInputValid() {
    inputRef.value.trim().length === Number(inputRef.dataset.length) ? inputRef.classList = 'valid' : inputRef.classList = 'invalid';
}
