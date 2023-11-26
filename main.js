const body = document.body;
const modeToggle = document.querySelector(".menu");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// loading

// const loading = document.getElementById("loader");


// setTimeout(() => {
//   loading.classList.add("loading-none");
// }, 700);

// window.addEventListener("scroll", function () {
//   shrink();
// });