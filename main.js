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
ADVANCED LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery img");

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

const counter =
document.querySelector(".lightbox-counter");

let currentIndex = 0;

function showImage(index){

    lightboxImage.src =
    galleryImages[index].src;

    counter.textContent =
    `${index + 1} / ${galleryImages.length}`;
}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{
        console.log("Clicked image");
        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("active");

    });

});

nextButton.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});

prevButton.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage(currentIndex);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

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

        currentIndex++;

        if(currentIndex >= galleryImages.length){
            currentIndex = 0;
        }

        showImage(currentIndex);

    }

    if(e.key === "ArrowLeft"){

        currentIndex--;

        if(currentIndex < 0){
            currentIndex = galleryImages.length - 1;
        }

        showImage(currentIndex);

    }

});

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

const socialCount =
document.querySelectorAll(".gallery .social").length;

const bannerCount =
document.querySelectorAll(".gallery .banner").length;

const backdropCount =
document.querySelectorAll(".gallery .backdrop").length;

const cardCount =
document.querySelectorAll(".gallery .card-type").length;

document.getElementById("social-count").textContent =
socialCount + " Designs";

document.getElementById("banner-count").textContent =
bannerCount + " Designs";

document.getElementById("backdrop-count").textContent =
backdropCount + " Designs";

document.getElementById("card-count").textContent =
cardCount + " Design";

fetch("data/projects.json")
.then(response => response.json())
.then(projects => {

    console.log("Projects Loaded:", projects);

    const projectGrid =
    document.getElementById("project-grid");

    projectGrid.innerHTML = "";

    projects.forEach(project => {

        projectGrid.innerHTML += `

<a href="project.html?id=${project.id}"
class="project-card-link">

<div class="project-card">

    <img src="${project.thumbnail}">

    <div class="project-content">

        <h3>${project.title}</h3>

        <p>${project.client}</p>

        <div class="project-info">

            <span>
                ${project.images.length} Designs
            </span>

            <span>
                ${project.year}
            </span>

        </div>

    </div>

</div>

</a>

`;
const gallery =
document.getElementById("gallery");

projects.forEach(project => {

    let cssClass = "";

    if(project.categories.includes("Social Media"))
        cssClass = "social";

    else if(project.categories.includes("Backdrop"))
        cssClass = "backdrop";

    else if(project.categories.includes("Website Banner"))
        cssClass = "banner";

    else if(project.categories.includes("Visiting Card"))
        cssClass = "card-type";

    project.images.forEach(image => {

        gallery.innerHTML += `

        <div class="card ${cssClass}">

            <img src="${image}">

            <div class="overlay">

                <h3>${project.title}</h3>

                <p>${project.categories.join(", ")}</p>

                <span>${project.year}</span>

            </div>

        </div>

        `;

    });
  
    const gallery =
document.getElementById("gallery");

gallery.innerHTML = "";

projects.forEach(project => {

    let cssClass = "";

    if(project.categories.includes("Social Media"))
        cssClass = "social";

    else if(project.categories.includes("Backdrop"))
        cssClass = "backdrop";

    else if(project.categories.includes("Website Banner"))
        cssClass = "banner";

    else if(project.categories.includes("Visiting Card"))
        cssClass = "card-type";

    project.images.forEach(image => {

        gallery.innerHTML += `

        <div class="card ${cssClass}">

            <img src="${image}">

            <div class="overlay">

                <h3>${project.title}</h3>

                <p>${project.categories.join(", ")}</p>

                <span>${project.year}</span>

            </div>

        </div>

        `;

    });

});

});

    });

})
.catch(error => {

    console.error("JSON Load Error:", error);

});