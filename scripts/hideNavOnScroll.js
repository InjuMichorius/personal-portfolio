var prevScrollpos = window.pageYOffset;

function handleScroll() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("header");

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-140px";
  }

  prevScrollpos = currentScrollPos;
}

// Check if the screen width is 768px or wider
function isScreenWidth768OrWider() {
  return window.innerWidth >= 768;
}

// Attach the scroll event only if the screen width is 768px or wider
if (isScreenWidth768OrWider()) {
  window.onscroll = handleScroll;
} else {
  // If the screen width is less than 768px, remove the scroll behavior
  window.onscroll = null;
}