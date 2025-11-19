// 1. Dark Mode Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const icon = themeToggle.querySelector("i");

// Check for saved user preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  htmlElement.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);
}

themeToggle.addEventListener("click", () => {
  let theme = htmlElement.getAttribute("data-theme");
  let newTheme = theme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  if (theme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// 2. Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// 3. Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
// Trigger once on load
revealOnScroll();
