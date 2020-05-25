// wow.js
new WOW().init();

// add scroll to top button after scroll
let scrollToTop = document.querySelector(".scrollToTop");
window.onscroll = (e) => {
  if (window.pageYOffset > 130) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
};
