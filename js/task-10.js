function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');


const createBtn = controlsRef.children[1];
const destroyBtn = controlsRef.lastElementChild;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  amount = Number(controlsRef.firstElementChild.value);
  if (amount > 0 && amount <= 100) {
    let value = 20;

    for (let i = 1; i <= amount; i += 1) {
      value += 10;
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = value + 'px'
      box.style.height = value + 'px'
      boxesRef.append(box);
    }
  } else {
    alert("WRONG!!!! Value must be min=1 max=100")
  }
}
function destroyBoxes() {
  boxesRef.innerHTML = ''
}
