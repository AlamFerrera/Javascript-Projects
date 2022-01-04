const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector(".search-form");
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
});

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}