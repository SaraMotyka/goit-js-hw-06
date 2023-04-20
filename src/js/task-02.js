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
const newArray = [];
//2
ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = ingredient;
    newArray.push(li);
});
//3
ingredientsList.append(...newArray);
//1 Pobieram tablicę ingredients i jej elementy
//Tworzę nową tablicę
//2 Iteruję po tablicy pętlą forEach, dla każdego ingredient tworzę element li któremu przypisuję klasę item i dodaję stringi z tablicy ingredients.
//Do nowej tablicy dopycham elementy li
//3 Do ingredientsList dodaję podzieloną na elementy tablicę newArray
