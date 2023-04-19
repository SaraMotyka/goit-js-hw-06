// 1
const listItems = document.querySelectorAll(".item");

// 2
console.log(`Number of categories: ${listItems.length}`);
// 3
listItems.forEach((item) => {
    const heading = item.querySelector("h2").textContent;
    console.log(`Category: ${heading}`);
    //4
    const elements = item.querySelectorAll("li").length;
    console.log(`Elements: ${elements}`);
});

//1 Pobieram wszystkie elementy o klasie item
//2 Zwracam ilość elementów o klasie item
//3 Szukam każdą klasę item i zwracam jej nagłówek w formie tekstu i zwracam nagłówek
//4 Szukam każdą klasę item i zwracam ich ilość
