const symbol = document.querySelector(".symbol-h1");
const nav = document.querySelector("nav");
const symbolHome = document.querySelector(".symbol-home");
const menuBtn = document.querySelector(".landing-section button");
const menu = document.querySelector(".menu");
const form = document.querySelector("form");

// desktop elements
const symbolDesktop = document.querySelector(".symbol-home-desktop");
const logoDesktop = document.querySelector(".logo-svg");
const footerUl = document.querySelectorAll(".footer-nav ul");
const learnMore = document.querySelector(".about-info a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  // makes it scroll up when the user scrolls down
  symbol.style.transform = `translateY(${scrollPos * -0.75}px)`;

  if (scrollPos >= 100) {
    nav.classList.add("nav-active");
    symbolHome.style.opacity = 1;
    symbolDesktop.style.opacity = 1;
    logoDesktop.style.opacity = 1;
  } else {
    nav.classList.remove("nav-active");
    symbolHome.style.opacity = 0;
    symbolDesktop.style.opacity = 0;
    logoDesktop.style.opacity = 0;
  }
});

// Hide the radio buttons on site load

// Radio buttons slide up on hover
const radioBtn = document.getElementsByName("item-color");
radioBtn.forEach(function (radio) {
  radio.addEventListener("change", function (e) {
    const target = e.currentTarget;
    const color = target.value;

    const gridItem = target.closest(".grid-item");
    const gridImg = gridItem.querySelector("img");

    gridImg.src = this.dataset.img;
  });
});

const images = document.getElementsByClassName("image");

for (let i = 0; i < images.length; i++) {
  const imageNames = document.getElementsByTagName("h5");
  const picture = document.getElementsByTagName("img");
  images[i].addEventListener("mouseover", function () {
    // imageNames[i].style.textDecoration = "underline";
    picture[i].style.opacity = "0.5";
  });

  images[i].addEventListener("mouseout", function () {
    // imageNames[i].style.textDecoration = "none";
    picture[i].style.opacity = "1";
  });
}

nav.addEventListener("mouseover", () => {
  nav.classList.add("nav-hover");
  symbolHome.style.opacity = 1;
  symbolDesktop.style.opacity = 1;
  logoDesktop.style.opacity = 1;
});

nav.addEventListener("mouseout", () => {
  nav.classList.remove("nav-hover");
});

menuBtn.addEventListener("click", () => {
  if (menuBtn.textContent === "Menu") {
    menuBtn.textContent = "Close";
    nav.classList.add("nav-hover");
    menu.classList.add("menu-active");

    symbolHome.style.opacity = 1;
    document.body.style.overflow = "hidden";
  } else {
    menuBtn.textContent = "Menu";
    nav.classList.remove("nav-hover");
    symbolHome.style.opacity = 0;
    document.body.style.overflow = "";

    menu.classList.remove("menu-active");
  }
});

// about section
learnMore.addEventListener("mouseover", () => {
  learnMore.style.borderBottom = "none";
});
learnMore.addEventListener("mouseout", () => {
  setTimeout(() => {
    learnMore.style.borderBottom = "2px solid";
  }, 600);
});

// footer elements
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

footerUl.forEach((ul) => {
  ul.addEventListener("mouseover", () => {
    ul.classList.add("footer-hover");
  });

  ul.addEventListener("mouseout", () => {
    ul.classList.remove("footer-hover");
  });
});
