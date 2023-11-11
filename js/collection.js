function menuOC() {
  const menuBtn = document.querySelector(".menuOpen");
  const closeBtn = document.querySelector(".closeBtn");
  const menuArea = document.querySelector(".navbar--mobile-section");

  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuArea.style.transform = `translateX(0%)`;
  });
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuArea.style.transform = `translateX(-110%)`;
  });
}

menuOC();
