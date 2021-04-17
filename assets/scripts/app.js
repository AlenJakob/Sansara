const header = document.querySelector(".body__header");
const sectionOne = document.querySelector(".body__hero");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      header.classList.remove("nav-scrolled-out");
    } else {
      header.classList.remove("nav-scrolled");
      header.classList.add("nav-scrolled-out");
    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
  appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});


// scroll to unpack button
const scrollByButton = document.getElementById("scrollBy");
const headerUnpack = document.getElementById("headerUnpack")
// scrollByButton.addEventListener("mouseenter", (e) => {

//   headerUnpack.scrollIntoView();

// })