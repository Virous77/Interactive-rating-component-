document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".active").classList.toggle("hidden");
});

document.querySelector(".active").addEventListener("click", () => {
  document.querySelector(".active").classList.toggle("hiddens");
});
