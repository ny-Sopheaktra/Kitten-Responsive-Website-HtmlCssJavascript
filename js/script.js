// add your javascript here
let hamburger = document.querySelector(".hamb");
let navBox = document.querySelector(".nav_box");

hamburger.addEventListener("click", function () {
    navBox.classList.toggle("check");
});