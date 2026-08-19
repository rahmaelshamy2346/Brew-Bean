// =========================
// Mobile Navbar
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// Menu Button
// =========================

const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
    alert(
        "Our full menu includes Espresso, Latte, Cappuccino, Mocha, Iced Coffee, Croissants, Cheesecake and more!"
    );
});


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your message has been sent successfully.`;

    contactForm.reset();
});


// =========================
// Navbar Shadow on Scroll
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.style.boxShadow =
            "0 5px 20px rgba(50, 30, 20, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});