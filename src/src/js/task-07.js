//1
const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
//2
inputSize.addEventListener("input", () => {
    text.style.fontSize = `${inputSize.value}px`;
});

//1 Wyszukuję input i span za pomocą ID
//2 Dodaję zdarzenie input które zmienia wielkość tekstu
