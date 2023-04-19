function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
//1
const bgColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
//2
changeColor.addEventListener("click", () => {
    const newBgColor = getRandomHexColor();
    document.body.style.backgroundColor = newBgColor;
    bgColor.textContent = newBgColor;
});

//1 Wyszukuję klasę spanu i klasę przycisku
//2 Dodaję zdarzenie zmainy koloru tła po kliknieciu przycisku
