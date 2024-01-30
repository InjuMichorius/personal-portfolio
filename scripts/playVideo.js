// Get all video elements on the page
var videoElements = document.querySelectorAll("video");

// Add event listeners to each video element
videoElements.forEach(function (video) {
  // Mouseover event
  video.addEventListener("mouseover", function () {
    this.play();
  });

  // Mouseleave event
  video.addEventListener("mouseleave", function () {
    this.currentTime = 0; // Set the playback time to the beginning
    this.pause();
  });

  // Check if the screen width is less than 768px (assuming you want autoplay on smaller screens)
  if (window.innerWidth < 768) {
    video.autoplay = true;
    video.muted = true; // Mute the video for better autoplay chances
  } else {
    // If on a larger screen, remove autoplay attribute
    video.removeAttribute("autoplay");
  }
});
