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
//
let menu = document.querySelector(".menu");
let menuWrapper = document.querySelector(".menu-wrapper");
menu.addEventListener("click", () => {
  if (!menuWrapper.classList.contains("show-flex")) {
    menuWrapper.classList.add("show-flex");
  } else {
    menuWrapper.classList.remove("show-flex");
  }
});
// menuWrapper.addEventListener("click", () => {
//   if (menuWrapper.classList.contains("show-flex")) {
//     menuWrapper.classList.remove("show-flex");
//   }
// });
