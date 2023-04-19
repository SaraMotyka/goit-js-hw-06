//1
const form = document.querySelector(".login-form");
//2
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    //3
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    //4
    if (email.value === "" || password.value === "") {
        alert("Proszę uzupełnić wszystkie pola!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
//1 Wyszukuję klasę formularza
//2 Dodaję zdarzenie na kliknięcie przycisku
//3 Dodaję metodę preventDefault() która powstrzymuje ponowne ładowanie strony
//4 Jeśli email.value albo password.value jest puste wyświetlam alert
