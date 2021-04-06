document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("IS RUNNING !");
  document.querySelectorAll(".header__image").forEach((e) => console.log(e));
}
