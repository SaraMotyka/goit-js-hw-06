//1
let counterValue = 0;

//2
const value = document.querySelector("#value");

//3
const decrementButton = document.querySelector(
    'button[data-action ="decrement"]'
);
const incrementButton = document.querySelector(
    'button[data-action ="increment"]'
);

//4
decrementButton.addEventListener("click", () => {
    counterValue--;
    newResult();
});
incrementButton.addEventListener("click", () => {
    counterValue++;
    newResult();
});

//5
function newResult() {
    value.textContent = counterValue;
}

//1 Tworzę zmienną i jej wartość początkową
//2 Wyszukuję ID value
//3 Tworzę zmienne incrementButton i decrementButton
//4 Dodaję click listeners do przycisków, zwiększam wartość
//5 Aktualizuję interfejs
