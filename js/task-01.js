
const allItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', allItemsRef.length);

function categoriesContent() {
    const result = allItemsRef.forEach(category => {
        console.log('Category:', category.firstElementChild.textContent);
        console.log('Elements:', category.lastElementChild.childElementCount);
    });
    return result;
}
categoriesContent();

