const elementsItems = document.querySelectorAll('.item');


console.log('Number of categories:', elementsItems.length);

elementsItems.forEach(element => {
    const titleElements = element.firstElementChild;

    const innerLiElements = element.lastElementChild.children;

    console.log('Category:' , titleElements.textContent);
    console.log('Elements:' , innerLiElements.length);
});