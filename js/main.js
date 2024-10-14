const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger");
const burgerIcon = burgerButton.querySelector(".header__burger-icon");
const menu = document.querySelector(".menu");
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const allForms = document.querySelectorAll(".form");

allForms.forEach((form) => {
    form.addEventListener("submit", () => {
        form.querySelector(".form__btn").disabled = true;
    });
});

// Toggle header class based on scroll position
function toggleHeaderClass() {
    header.classList.toggle("is-scroll", window.scrollY > 1);
}

// Change burger icon based on menu state
function toggleBurgerIcon() {
    burgerIcon.src = menu.classList.contains("is-open")
        ? "img/icons/burger-close.svg"
        : "img/icons/burger-open.svg";
}

// Smooth scroll to anchor
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 50;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

// Toggle menu and update icon
burgerButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    document.body.classList.toggle("is-menu");
    toggleBurgerIcon();
});

// Handle anchor link clicks
anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const anchorId = link.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
        menu.classList.remove("is-open");
        document.body.classList.remove("is-menu");
        toggleBurgerIcon();
    });
});

// Initial checks
window.addEventListener("scroll", toggleHeaderClass);
toggleHeaderClass();
