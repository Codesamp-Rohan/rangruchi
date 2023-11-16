const productCloseBtn = document.querySelector(".product--model-closeBtn");
const productModel = document.querySelector(".product--model");
const productCard = document.querySelectorAll(".card img");
console.log(productCard);
productCard.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("CLICKED");
    productModel.style.display = "flex";
  });
});

productCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  productModel.style.display = "none";
});

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
modelOC();

const productParent = document.querySelector(".product--area");

const product = {
  1: ["../images/sl/subh--001.jpg"],
  2: ["../images/sl/subh--002.jpg"],
  3: ["../images/sl/subh--003.jpg"],
  4: ["../images/sl/subh--004.jpg"],
  5: ["../images/sl/subh--005.jpg"],
  6: ["../images/sl/subh--006.jpg"],
  7: ["../images/sl/subh--007.jpg"],
  8: ["../images/sl/subh--008.jpg"],
  9: ["../images/sl/subh--009.jpg"],
  10: ["../images/sl/subh--010.jpg"],
  11: ["../images/sl/subh--011.jpg"],
  12: ["../images/sl/subh--012.jpg"],
};

let i = "";
for (const [key, value] of Object.entries(product)) {
  console.log(key, value);
  const html = `
        <div class="card subh--card">
        <h1 class="discount">20% off</h1>
        <img
          src="${value}"
          alt="" />
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

// <div class="product--card" data-tab=${key}>
//       <img src=${value} alt="" />
//       <div class="product--card-content">
//         <h2>Mala-${key}</h2>
//         <button class="product--btn">Buy Now</button>
//       </div>
//     </div>

lazyLoad();
menuResponse();
