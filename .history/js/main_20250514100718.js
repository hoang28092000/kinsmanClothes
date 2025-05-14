// responsive navbar
const menu = document.querySelector("#menu-nav");
const menuToggle = document.querySelector(".btn-nav");
const menuClose = document.querySelector("#close-mav");
menuToggle.addEventListener("click" ,() =>)



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
document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      const searchInput = document.getElementById('search-input').value.toLowerCase();

      fetch('../data/products.json')
        .then(res => res.json())
        .then(data => {
          const filteredProducts = data.filter(product =>
            product.name.toLowerCase().includes(searchInput) ||
            product.description.toLowerCase().includes(searchInput)
          );

          const resultsContainer = document.querySelector('.search-results');
          resultsContainer.innerHTML = '';

          if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
              const productHTML = `
                <div class="product-item">
                  <img src="${product.image}" alt="${product.name}" />
                  <h3>${product.name}</h3>
                  <p>${product.price}</p>
                  <p>${product.description}</p>
                  <a href="./detail/detail-product.html?id=${product.id}">Xem chi tiết</a>
                </div>
              `;
              resultsContainer.innerHTML += productHTML;
            });
          } else {
            resultsContainer.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
          }
        })
        .catch(err => console.error('LỖI FETCH:', err));
    });
  } else {
    console.error('Không tìm thấy nút tìm kiếm!');
  }
});