const sliders = document.querySelectorAll(".slide");
let current = 0;
let interval = null;

function showNextSlide() {
  sliders[current].classList.remove("active");
  current = (current + 1) % sliders.length;
  sliders[current].classList.add("active");
}
function