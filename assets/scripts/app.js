
const header = document.querySelector(".section__header");
const sectionOne = document.querySelector(".section__hero");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

function runAnimation() {

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

  // DOM ELEMENTS
  const scrollByButton = document.getElementById("scrollBy");
  const headerUnpack = document.querySelector(".section-summary")
  // SCROLL TO
  scrollByButton.addEventListener("mouseenter", function () {
    headerUnpack.scrollIntoView(true);
  });

}
function isIE() {
  const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  const msie = ua.indexOf('MSIE '); // IE 10 or older
  const trident = ua.indexOf('Trident/'); //IE 11

  return (msie > 0 || trident > 0);
}

function init() {
  console.log(isIE())
  if (isIE()) {
    // entry.target.classList.add("appear");
    console.log("is IE");
    return;
  } 

    runAnimation()


}


init();
