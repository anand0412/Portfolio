const params =
new URLSearchParams(window.location.search);

const type =
params.get("type");

const gallery =
document.getElementById("category-gallery");

const title =
document.getElementById("category-title");

const totalDesigns =
document.getElementById("total-designs");

fetch("data/projects.json")

.then(response => response.json())

.then(projects => {

    let count = 0;

    projects.forEach(project => {

        let matched = false;

        if(
            type === "social-media" &&
            project.categories.includes("Social Media")
        ){
            matched = true;
        }

        if(
            type === "website-banner" &&
            project.categories.includes("Website Banner")
        ){
            matched = true;
        }

        if(
            type === "backdrop" &&
            project.categories.includes("Backdrop")
        ){
            matched = true;
        }

        if(
            type === "visiting-card" &&
            project.categories.includes("Visiting Card")
        ){
            matched = true;
        }

        if(matched){

            project.images.forEach(image => {

                count++;

                gallery.innerHTML += `

                <img src="${image}">

                `;

            });

        }

    });

    totalDesigns.textContent = count;

    if(type === "social-media")
        title.textContent = "Social Media Designs";

    if(type === "website-banner")
        title.textContent = "Website Banners";

    if(type === "backdrop")
        title.textContent = "Backdrops";

    if(type === "visiting-card")
        title.textContent = "Visiting Cards";

});