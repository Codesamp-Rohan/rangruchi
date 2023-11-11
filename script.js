//GLOBAL DECLARATION
const cursor = document.querySelector(".cursor");
const anker = document.querySelectorAll("a");
const page2 = document.querySelector(".page2");

window.addEventListener("load", function () {
  document.querySelector(".loader--area").style.display = "none";
});

window.addEventListener("resize", function () {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth <= 900) {
    this.document.querySelector("#navbar--mobile").style.display = "flex";
    this.document.querySelector("#navbar--desktop").style.display = "none";
  } else {
    this.document.querySelector("#navbar--mobile").style.display = "none";
    this.document.querySelector("#navbar--desktop").style.display = "flex";
  }
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
function sendMsgOnWhatsapp() {
  document.querySelector("#footerBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var phoneNumber = "8420503040"; // Replace with the target phone number
    var name = document.querySelector("#name").value;
    var mail = document.querySelector("#email").value;
    var message = document.querySelector("#message").value; // Replace with the message you want to send

    var customMsg = "Hey there, I am " + name + ".\n" + message;

    var whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(customMsg);

    window.open(whatsappURL, "_blank");
  });
}
function slider() {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length - 1;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  btnRight.addEventListener("click", function (e) {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });
  btnLeft.addEventListener("click", function (e) {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });
}
function lazyLoad() {
  function lazyLoadImage(target) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute("data-src");
          img.setAttribute("src", dataSrc);
          observer.unobserve(img);
        }
      });
    });
    io.observe(target);
  }

  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach(lazyLoadImage);
}
function menuResponse() {
  const openBtn = document.querySelector(".menuOpen");
  const closeBtn = document.querySelector(".closeBtn");
  const menuArea = document.querySelector(".navbar--mobile-section");
  const ankerTags = document.getElementById("contactBtn--mobile");
  const contactBtn = document.querySelectorAll(".contactBtn");

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuArea.style.transform = `translateX(0%)`;
  });
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuArea.style.transform = `translateX(-110%)`;
  });
  ankerTags.addEventListener("click", function (elem) {
    elem.preventDefault();
    console.log("CLICKED");
    menuArea.style.transform = `translateX(-110%)`;
    document
      .querySelector("#section--5")
      .scrollIntoView({ behavior: "smooth" });
  });
  contactBtn.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector("#section--5")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}
function modelColor() {
  const modelWindow = document.querySelector(".modelWindow");

  document.addEventListener("scroll", function (e) {
    const scrollPosition = window.scrollY; // Get the current scroll position
    // console.log(scrollPosition);

    if (scrollPosition <= 2500) {
      // console.log("Yes");
      modelWindow.style.backgroundColor = `#be052a`;
    } else {
      // console.log("No");
      modelWindow.style.backgroundColor = `var(--primary)`;
    }
  });
}
modelOC();
sendMsgOnWhatsapp();
slider();
lazyLoad();
menuResponse();
modelColor();
// function cursorHover() {
//   window.addEventListener("mousemove", function (e) {
//     cursor.animate(
//       {
//         left: e.pageX + "px",
//         top: e.pageY + "px",
//       },
//       { duration: 600, fill: "forwards" }
//     );
//   });
//   anker.forEach((e) => {
//     e.addEventListener("mouseenter", function (elem) {
//       cursor.style.opacity = "0.1";
//     });
//     e.addEventListener("mouseleave", function (elem) {
//       cursor.style.opacity = "1";
//     });
//   });
//   page2.addEventListener("mouseenter", function () {
//     cursor.style.scale = "0";
//   });
//   page2.addEventListener("mouseleave", function () {
//     cursor.style.scale = "1";
//   });
// }
// cursorHover();
// navEffect();
