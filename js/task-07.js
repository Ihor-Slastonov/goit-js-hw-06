const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeSize);
spanRef.style.fontSize = `${inputRef.value}px`;

function onChangeSize(event) {
    spanRef.style.fontSize = `${inputRef.value}px`;
}