const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

//1
const ingredientsList = document.querySelector("#ingredients");
//2
ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add(`item`);
    ingredientsList.append(item);
});

//1 Pobieram elementy tablicy
//2 Dla każdego elementu: tworzę element <li>, dodaję string z tablicy, dodaję klasę .item, dodaję do listy.
