

let scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    scrollToTopBtn.style.opacity = "1";
  } else {
   
    scrollToTopBtn.style.opacity = "0";
  }
};

scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};