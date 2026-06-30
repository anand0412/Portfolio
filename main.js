/* ==========================================
   ANAND PORTFOLIO V2.0
   Part 1
========================================== */

console.log("Portfolio V2 Loaded");

/* ==========================================
SCROLL REVEAL
========================================== */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

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

/* ==========================================
ACTIVE MENU
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
SCROLL PROGRESS
========================================== */

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

/* ==========================================
LOAD JSON
========================================== */

fetch("data/projects.json")

.then(response => response.json())

.then(projects => {

    console.log(projects);

/* ==========================================
BROWSE BY DESIGN TYPE
========================================== */

const typeGrid =
document.getElementById("type-grid");

if(typeGrid){

    typeGrid.innerHTML = "";

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

    .sort((a,b)=>a[0].localeCompare(b[0]))

    .forEach(([category,count])=>{

        const slug =
        category
        .toLowerCase()
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

}

/* ==========================================
FEATURED PROJECTS
========================================== */

const projectGrid =
document.getElementById("project-grid");

if(projectGrid){

    projectGrid.innerHTML = "";

    projects.forEach(project => {

        projectGrid.innerHTML += `

<a href="project.html?id=${project.id}"
class="project-card-link">

<div class="project-card">

    <img src="${project.thumbnail}"
    alt="${project.title}">

    <div class="project-content">

        <div class="project-tag">

            ${project.categories[0]}

        </div>

        <h3>${project.title}</h3>

        <p class="client">

            ${project.client}

        </p>

        <div class="project-info">

            <span>

                <i class="fas fa-layer-group"></i>

                ${project.images.length} Designs

            </span>

            <span>

                <i class="fas fa-calendar"></i>

                ${project.year}

            </span>

        </div>

    </div>

</div>

</a>

`;

    });

}

/* ==========================================
FEATURED WORKS
========================================== */

const gallery =
document.getElementById("gallery");

if(gallery){

    gallery.innerHTML = "";

    projects.forEach(project => {

        let cssClass = "";

        if(project.categories.includes("Social Media")){

            cssClass = "social";

        }

        else if(project.categories.includes("Backdrop")){

            cssClass = "backdrop";

        }

        else if(project.categories.includes("Website Banner")){

            cssClass = "banner";

        }

        else if(project.categories.includes("Visiting Card")){

            cssClass = "card-type";

        }

        project.images.forEach(image => {

            gallery.innerHTML += `

<div class="card ${cssClass}">

    <img
    src="${image}"
    class="gallery-image"
    alt="${project.title}">

    <div class="overlay">

        <h3>${project.title}</h3>

        <p>

            ${project.categories.join(", ")}

        </p>

        <span>

            ${project.year}

        </span>

    </div>

</div>

`;

        });

    });

}

/* ==========================================
FILTERS
========================================== */

const buttons =
document.querySelectorAll(".filter-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        document
        .querySelectorAll(".gallery .card")

        .forEach(card => {

            if(

                filter === "all"

                ||

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

/* ==========================================
HOMEPAGE LIGHTBOX
========================================== */

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

const counter =
document.querySelector(".lightbox-counter");

let currentIndex = 0;

function updateLightbox(){

    lightboxImage.src =
    galleryImages[currentIndex].src;

    if(counter){

        counter.textContent =
        `${currentIndex + 1} / ${galleryImages.length}`;

    }

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        updateLightbox();

        lightbox.classList.add("active");

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

}

if(nextButton){

    nextButton.addEventListener("click",()=>{

        currentIndex++;

        if(currentIndex >= galleryImages.length){

            currentIndex = 0;

        }

        updateLightbox();

    });

}

if(prevButton){

    prevButton.addEventListener("click",()=>{

        currentIndex--;

        if(currentIndex < 0){

            currentIndex =
            galleryImages.length - 1;

        }

        updateLightbox();

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

}

document.addEventListener("keydown",(e)=>{

    if(!lightbox) return;

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

        updateLightbox();

    }

    if(e.key === "ArrowLeft"){

        currentIndex--;

        if(currentIndex < 0){

            currentIndex =
            galleryImages.length - 1;

        }

        updateLightbox();

    }

});

/* ==========================================
END FETCH
========================================== */

})

.catch(error => {

    console.error(
        "JSON Load Error:",
        error
    );

});