AOS.init({
  disable: false, 
  startEvent: "DOMContentLoaded",
  initClassName: "site__item", 
  animatedClassName: "aous-animate", 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 250, 
  throttleDelay: 99,
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: "ease", 
  once: false, 
  mirror: false, 
  anchorPlacement: "top-bottom", });


AOS.init();

// const scrollByButton = document.getElementById("scrollBy");

// scrollByButton.addEventListener("mouseenter", function () {
//     headerUnpack.scrollIntoView(true);
//   });