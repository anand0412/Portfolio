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
document.querySelectorAll(".gallery-image");

let currentIndex = 0;

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

galleryImages.forEach((image,index) => {

    image.addEventListener("click",()=>{

        currentIndex = index;

        lightboxImage.src =
        image.src;

        lightbox.classList.add("active");

    });

});

document.querySelector(".close-lightbox")
.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

document.querySelector(".lightbox-prev")
.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        galleryImages.length - 1;

    }

    lightboxImage.src =
    galleryImages[currentIndex].src;

});

document.querySelector(".lightbox-next")
.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

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

        currentIndex++;

        if(currentIndex >= galleryImages.length){

            currentIndex = 0;

        }

        lightboxImage.src =
        galleryImages[currentIndex].src;

    }

    if(e.key === "ArrowLeft"){

        currentIndex--;

        if(currentIndex < 0){

            currentIndex =
            galleryImages.length - 1;

        }

        lightboxImage.src =
        galleryImages[currentIndex].src;

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

fetch("data/projects.json")
.then(response => response.json())
.then(projects => {

    console.log("Projects Loaded:", projects);

    const typeGrid =
document.getElementById("type-grid");

const categoryMap = {};

projects.forEach(project => {

    project.categories.forEach(category => {

        if(!categoryMap[category]){

            categoryMap[category] = 0;
        }

        categoryMap[category] +=
        project.images.length;

    });

});

Object.entries(categoryMap)
.forEach(([category,count]) => {

    const slug =
    category.toLowerCase()
    .replace(/\s+/g,"-");

    typeGrid.innerHTML += `

    <a href="category.html?type=${slug}"
    class="type-card">

        <div class="type-icon">

            <i class="fas fa-folder-open"></i>

        </div>

        <h3>${category}</h3>

        <p>${count} Designs</p>

    </a>

    `;

});

    let socialCount = 0;
let bannerCount = 0;
let backdropCount = 0;
let cardCount = 0;

projects.forEach(project => {

    if(project.categories.includes("Social Media")){

        socialCount += project.images.length;

    }

    if(project.categories.includes("Website Banner")){

        bannerCount += project.images.length;

    }

    if(project.categories.includes("Backdrop")){

        backdropCount += project.images.length;

    }

    if(project.categories.includes("Visiting Card")){

        cardCount += project.images.length;

    }

});

    /* FEATURED PROJECTS */

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

    });

    /* FEATURED WORKS */

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

})
.catch(error => {

    console.error("JSON Load Error:", error);

});