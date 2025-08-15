const symbol = document.querySelector(".symbol-h1");
const nav = document.querySelector("nav");
const symbolHome = document.querySelector(".symbol-home");
const menuBtn = document.querySelector(".landing-section button");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  console.log(scrollPos);

  // makes it scroll up when the user scrolls down
  symbol.style.transform = `translateY(${scrollPos * -0.75}px)`;

  if (scrollPos >= 100) {
    console.log("i am true");
    nav.classList.add("nav-active");
    symbolHome.style.opacity = 1;
  } else {
    nav.classList.remove("nav-active");
    symbolHome.style.opacity = 0;
  }
});

nav.addEventListener("mouseover", () => {
  nav.classList.add("nav-hover");
  symbolHome.style.opacity = 1;
});

nav.addEventListener("mouseout", () => {
  nav.classList.remove("nav-hover");
});

menuBtn.addEventListener("click", () => {
  console.log("hi");

  if (menuBtn.textContent === "Menu") {
    menuBtn.textContent = "Close";
    nav.classList.add("nav-hover");
    // menu.style.left = 0;
    menu.classList.add("menu-active");

    symbolHome.style.opacity = 1;
    document.body.style.overflow = "hidden";
  } else {
    menuBtn.textContent = "Menu";
    nav.classList.remove("nav-hover");
    symbolHome.style.opacity = 0;
    document.body.style.overflow = "";

    menu.classList.remove("menu-active");

    // menu.style.left = "-100rem";
  }
});
