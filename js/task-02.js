const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientsList = options => {

  return options.map(option => {

    const ingridientEl = document.createElement('li');

    ingridientEl.textContent = option;

    ingridientEl.classList.add('item');

    return ingridientEl;
  });

};
const elements = createIngredientsList(ingredients);

const ulEl = document.querySelector("#ingredients")

ulEl.prepend(...elements);


