const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];
//1
const gallery = document.querySelector(".gallery");
//2
gallery.classList.add(`galleryItems`);
document.querySelector(".galleryItems").style.display = "flex";
document.querySelector(".galleryItems").style.gap = "20px";
//3
const secondGallery = images
    .map((image) => `<li><img src="${image.url}", alt="${image.alt}"></li>`)
    .join("");
//4
gallery.insertAdjacentHTML("beforeend", secondGallery);
gallery.insertAdjacentHTML("beforebegin", "<h2>Our new gallery</h2>");

//1 Wyszukuję klasę .gallery
//2 Tworzę nową klasę i dodaję style do galerii
//3 Tworzę znaczniki <img> umieszczone w znacznikach <li>
//4 Dodaję do html galerię i tytuł
