const sliders = document.querySelectorAll(".slide");
let current = 0;
let interval = null;

function showNextSlide() {
  sliders[current].classList.remove("active");
  current = (current + 1) % sliders.length;
  sliders[current].classList.add("active");
}
function startSlider() {
  interval = setInterval(showNextSlide, 000);
}
function stopSlider() {
  clearInterval(interval);
}

const slider = document.getElementById("slider");
slider.addEventListener("mouseover", stopSlider);
slider.addEventListener("mouseleave", startSlider);