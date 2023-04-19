//1
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
//2
nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.value ? nameInput.value : "Anonymous";
});

//1 Wyszukuję input i output za pomocą ID
//2 Używam operatora ternary zamiast składni if..else
// tekst outputa = tekst inputa, jeśli tekst inputa = 0 to output = Anonymous
