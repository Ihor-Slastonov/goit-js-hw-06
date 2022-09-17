const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeSize);

function onChangeSize(event) {
    spanRef.style.fontSize = `${inputRef.value}px`;
}