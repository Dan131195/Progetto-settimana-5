const nav = document.querySelector("header");
const start = document.getElementById("start");

nav.addEventListener("scroll", () => {
  if (window.scrollY(590)) {
    nav.style.backgroundColor = "white";
    start.style.backgroundColor = "green";
  }
});
