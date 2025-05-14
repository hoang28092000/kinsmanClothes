const sliders = document.querySelectorAll(".slide");
let current = 0;
let interval = null;

function showNextSlide() {
  sliders[current].classList.remove("active");
  current = (current + 1) % sliders.length;
  sliders[current].classList.add("active");
}
function startSlider() {
  interval = setInterval(showNextSlide, 2500);
}
function stopSlider() {
  clearInterval(interval);
}

const slider = document.getElementById("slider");
if (slider) {
  slider.addEventListener("mouseover", stopSlider);
  slider.addEventListener("mouseleave", startSlider);
}
// Tạo trang chi tiết sản phẩm
if (window.location.pathname.includes('detail-product.html')) {
  const id = new URLSearchParams(window.location.search).get("id");

  fetch('../data/products.json')
    .then(res => res.json())
    .then(data => {
      const product = data.find(item => item.id === id);
      if (product) {
        document.querySelector('.product-img').src = product.image;
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-price').textContent = product.price;
        document.querySelector('.product-description').textContent = product.description;
      } else {
        document.body.innerHTML = '<p>Sản phẩm không tồn tại.</p>';
      }
    })
    .catch(err => {
      console.error('LỖI FETCH:', err);
    });
}

// search box
const form = document.querySelector('.search-box');
const se
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const keyword = document.getElementById('search-input').value.trim();

  if (keyword) {
    // Redirect hoặc xử lý filter
    window.location.href = `/tim-kiem.html?q=${encodeURIComponent(keyword)}`;
  }
});