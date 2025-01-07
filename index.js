document.getElementById("formulairecontact").addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("courriel").value;
    const message = document.getElementById("message").value;

    if (nom && email && message) {
        alert(`Merci ${nom} pour votre message ! Nous vous répondrons bientot.`);
        this.reset();
    } else {
        alert("Vuillez remplir tout les champs.");
    }
});

let bouton = document.querySelector("button");
bouton.addEventListener("mouseover", () => bouton.style.transform = "scale(1.1)");
bouton.addEventListener("mouseout", () => bouton.style.transform = "scale(1)");

document.querySelectorAll(".competence").forEach(comp => {
    comp.addEventListener("click", () => {
        let details = comp.querySelector(".details");
        details.style.display = details.style.display === "block" ? "none" : "block";
    });
});


let indexActuel = 0;
const images = document.querySelectorAll(".carousel .carteimage");
const totalImages = images.length;
let interval;

function afficherImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
    indexActuel = index;
}

function demarrerAutoSlide() {
    interval = setInterval(() => {
        afficherImage((indexActuel + 1) % totalImages);
    }, 3000);
}

function arreterAutoSlide() {
    clearInterval(interval);
}

document.getElementById("next").addEventListener("click", () => {
    arreterAutoSlide();
    afficherImage((indexActuel + 1) % totalImages);
    demarrerAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    arreterAutoSlide();
    afficherImage((indexActuel - 1 + totalImages) % totalImages);
    demarrerAutoSlide();
});

demarrerAutoSlide();
afficherImage(indexActuel);

let currentIndex = 0;
const carrouselImages = document.querySelectorAll('.carrousel img');
const totalCarrouselImages = carrouselImages.length;
let intervalId;

function showImage(index) {
    carrouselImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCarrouselImages;
    showImage(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + totalCarrouselImages) % totalCarrouselImages;
    showImage(currentIndex);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    previousSlide();
    startAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

showImage(currentIndex);
startAutoSlide();


