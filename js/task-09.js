function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
const body = document.querySelector('body')

buttonRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  spanRef.textContent = getRandomHexColor();
  body.style.backgroundColor = spanRef.textContent;
}
