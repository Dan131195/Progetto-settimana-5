const nav = document.querySelector("header");
const start = document.getElementById("start");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  if (scrollY > 480) {
    nav.style.backgroundColor = "white";
    start.style.backgroundColor = "green";
  } else {
    nav.style.backgroundColor = "#ffc017";
    start.style.backgroundColor = "#191919";
  }
});
