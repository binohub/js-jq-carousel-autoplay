const images = [
    "https://wallpapercave.com/wp/wp9476557.jpg",
    'https://wallpaperaccess.com/full/3037905.jpg',
    "https://images8.alphacoders.com/118/1186452.jpg",
    'https://wallpaper.dog/large/5538025.jpg',
    'https://images7.alphacoders.com/108/1082482.jpg',
    'https://coolhdwall.com/storage/202101/kda-akali-lol-4K-wallpaper-pc-preview-59.jpg',
    ];

// ? Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile
let imgActiveIndex = 0;
const caroselloContainerImg = document.querySelector(".carosello-container .carosello-container-img")
// ? obiettivo? 
// ? check di tutte le immagini e registrale, nell'html, una ad una (non saranno visibile ad eccezione di imgActive)

for (let index = 0; index < images.length; index++) {
    const imgHtml = document.createElement('img');
    imgHtml.setAttribute('src', images[index]);
    if (imgActiveIndex === index){
        imgHtml.classList.add('active');
    }
    caroselloContainerImg.append(imgHtml);
}


// ? obiettivo?
// ? btn attendi il click, al click devi togliere la classe active (img attuale) e aggiungerlo a quello dopo 

const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', function() {
    console.log("next clicked!");
    // ? prendi l'immagine attiva e rimuovi active
    const imgActive = document.querySelector(".carosello-container .carosello-container-img img.active")
    imgActive.classList.remove("active");

    // ? next
    imgActiveIndex++;
    console.log(`indice attuale ${imgActiveIndex}`);

    // ? error > imgAll.length
    if (imgActiveIndex === images.length) {
        imgActiveIndex = 0;
        console.log(`reset next`);
    }

    // ? check tutte le img e dai active a img che ha un index uguale a imgActiveIndex
    const imgAll = document.querySelectorAll(".carosello-container .carosello-container-img img");
    imgAll[imgActiveIndex].classList.add("active");
    console.log(imgAll);
});

const btnPrev = document.getElementById("btn-prev");
btnPrev.addEventListener("click", function() {
    console.log("prev clicked!");
    const imgActive = document.querySelector(".carosello-container .carosello-container-img img.active")
    imgActive.classList.remove("active");

    if (imgActiveIndex === 0) {
        imgActiveIndex = images.length;
        console.log(`reset prev`);
    }
    imgActiveIndex--;
    console.log(`indice attuale ${imgActiveIndex}`);

    const imgAll = document.querySelectorAll(".carosello-container .carosello-container-img img")
    console.log(imgAll);

    imgAll[imgActiveIndex].classList.add("active");
});

setInterval( function(){
    const imgActive = document.querySelector(".carosello-container .carosello-container-img img.active")
    imgActive.classList.remove("active");
    imgActiveIndex++;

    // ? error > imgAll.length
    if (imgActiveIndex === images.length) {
        imgActiveIndex = 0;
        console.log(`reset next`);
    }

    const imgAll = document.querySelectorAll(".carosello-container .carosello-container-img img");
    imgAll[imgActiveIndex].classList.add("active");

}, 1000);