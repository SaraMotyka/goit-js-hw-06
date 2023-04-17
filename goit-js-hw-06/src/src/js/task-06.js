//zdarzenie blur(utrata fokusu)
//odpowiednia długość wprowadzonej wartości .length
//id="validation-input" data-length="6"
//Jesli ilosc wprowadzonych znakow jest odpowiednia border zielony
//jesli nie to czerwony
//Użyj klas valid i invalid

//1
const validationInput = document.querySelector("#validation-input");
//2
const expectLength = validationInput.getAttribute("data-length");

//3
validationInput.addEventListener("blur", () => {
    const inputValue = validationInput.value;
    //4
    if (inputValue.length === parseInt(expectLength)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});

//1 Wyszukuję input po ID
//2 Wyszukuję atrybut inputu
//3 Dodaję zdarzenie blur
// Dodaję lub usuwam klasy z kolorami bordera
