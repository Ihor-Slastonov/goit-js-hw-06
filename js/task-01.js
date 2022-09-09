
const itemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', itemsRef.length);

function categoriesContent() {
    const result = itemsRef.forEach(category => {
        console.log('Category:', category.children[0].textContent);
        console.log('Elements:', category.children[1].childElementCount);
    });
    return result;
}
categoriesContent();

