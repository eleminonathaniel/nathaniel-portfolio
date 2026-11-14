const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

// Open close the menu when the button is clicked
toggle.addEventListener("click", () => {
    links.classList.toggle("open");
});

// Close the menu after clicking a link
links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.remove("open");
    });
});