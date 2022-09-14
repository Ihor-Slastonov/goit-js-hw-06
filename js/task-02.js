const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredientsItems = (ingredients) => {
  return ingredients.map(item => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('item');
    itemRef.textContent = item;
    return itemRef;
  })
}

const items = createIngredientsItems(ingredients);

ingredientsRef.append(...items);