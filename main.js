console.log('Anand Portfolio Phase 1 Loaded');const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".gallery .card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        cards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }

            else if(
                card.classList.contains(filter)
            ){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});

/* ==========================
LIGHTBOX
========================== */

/* ==========================
SCROLL REVEAL
========================== */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(reveal=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("active");

        }

    });

});

/* ==========================
ACTIVE MENU
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.classList.add("active");
        }

    });

});

/* ==========================
SCROLL PROGRESS
========================== */

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight =

document.documentElement.scrollHeight
-
window.innerHeight;

const progress =

(window.scrollY / totalHeight) * 100;

progressBar.style.width =
progress + "%";

});

fetch("data/projects.json")
.then(response => response.json())
.then(projects => {

    console.log("Projects Loaded:", projects);

    const typeGrid =
document.getElementById("type-grid");

const categoryMap = {};

projects.forEach(project => {

    ...

});

/* ==========================
HOMEPAGE LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-image");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

const closeLightbox =
document.querySelector(".close-lightbox");

const prevButton =
document.querySelector(".lightbox-prev");

const nextButton =
document.querySelector(".lightbox-next");

let currentIndex = 0;

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        lightboxImage.src =
        galleryImages[currentIndex].src;

        lightbox.classList.add("active");

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

nextButton.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    lightboxImage.src =
    galleryImages[currentIndex].src;

});

prevButton.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        galleryImages.length - 1;

    }

    lightboxImage.src =
    galleryImages[currentIndex].src;

});

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active"))
    return;

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key === "ArrowRight"){

        nextButton.click();

    }

    if(e.key === "ArrowLeft"){

        prevButton.click();

    }

});

})

.catch(error => {

    console.error("JSON Load Error:", error);

});


.catch(error => {

    console.error("JSON Load Error:", error);

});