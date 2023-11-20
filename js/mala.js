//////////////////////////////////////////////////////////////////////////////////
const menuLink = document.querySelector(".modelBtn");
menuLink.addEventListener("click", function () {
  document.querySelector(
    ".navbar--mobile-section"
  ).style.transform = `translateX(0%);`;
});

function mobileMenu() {
  const mobileMenuOpenBtn = document.querySelector(".menuOpen");
  const mobileMenuCloseBtn = document.querySelector(".closeBtn");
  const mobileSection = document.querySelector(".navbar--mobile-section");

  mobileMenuOpenBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");
    mobileSection.style.transform = "translateX(0%)";
  });
  mobileMenuCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");
    mobileSection.style.transform = "translateX(-110%)";
  });
}

function modelOC() {
  const modelWindow = document.querySelector(".modelWindow");
  const overlay = document.querySelector(".overlay");
  const openBtn = document.querySelectorAll(".modelBtn");
  const closeBtn = document.querySelector(".model--closeBtn");

  openBtn.forEach((e) => {
    e.addEventListener("click", function (elem) {
      elem.preventDefault();
      modelWindow.classList.add("active");
      overlay.classList.add("active");
      console.log("click");
    });
  });

  closeBtn.addEventListener("click", function () {
    modelWindow.classList.remove("active");
    overlay.classList.remove("active");
  });
}
mobileMenu();
modelOC();

const productParent = document.querySelector(".product--area");
const productModel = document.querySelector(".product--model");
const productCloseBtn = document.querySelector(".product--model-closeBtn");
const productModelImages = document.querySelectorAll(".image--area img");

const product = {
  1: ["../images/mala/mala--001.jpg"],
  2: ["../images/mala/mala--002.jpg"],
  3: ["../images/mala/mala--003.jpg"],
  4: ["../images/mala/mala--004.jpg"],
  5: ["../images/mala/mala--005.jpg"],
  6: ["../images/mala/mala--006.jpg"],
  7: ["../images/mala/mala--007.jpg"],
  8: ["../images/mala/mala--008.jpg"],
  9: ["../images/mala/mala--009.jpg"],
  10: ["../images/mala/mala--010.jpg"],
  11: ["../images/mala/mala--011.jpg"],
  12: ["../images/mala/mala--012.jpg"],
};

// Generate product cards
for (const [key, value] of Object.entries(product)) {
  console.log(key, value);
  const html = `
    <div class="card subh--card" data-product-key="${key}">
      <h1 class="discount">20% off</h1>
      <img src="${value[0]}" alt="" />
      <span class="card-content">
        <span>
          <p>SubhLaab-${key}</p>
          <p><p class="cut--price">&#8377; 120.00</p> &#8377; 75.00</p>
        </span>
        <a href="#"><button class="contactBtn productCheck">Check</button></a>
      </span>
    </div>
  `;

  productParent.insertAdjacentHTML("beforeend", html);
}

// Add click event listener to each product card
const productCards = document.querySelectorAll(".subh--card");
productCards.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    const productKey = elem.dataset.productKey;
    const imageURL = product[productKey][0];

    productModelImages.forEach((img) => {
      img.src = imageURL;
    });

    productModel.style.display = "flex";
  });
});

// Close the product--model when clicking the close button
productCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  productModel.style.display = "none";
});

// Lazy load and menu response functions are not provided in your code, so make sure they are defined elsewhere in your script.
lazyLoad();
menuResponse();
