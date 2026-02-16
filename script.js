// Box গুলো select করা
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

// Box 1
box1.addEventListener("click", function () {
  window.location.href = "box1.html";
});

// Box 2
box2.addEventListener("click", function () {
  window.location.href = "box2.html";
});

// Box 3
box3.addEventListener("click", function () {
  window.location.href = "box3.html";
});

// Box 4
box4.addEventListener("click", function () {
  window.location.href = "box4.html";
});


// ===== Slider System =====

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Show Slide
function showSlide(i) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[i].classList.add("active");
}

// Next Slide
function nextSlide() {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
}

// Previous Slide
function prevSlide() {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  showSlide(index);
}

// Button Events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Slide (3 seconds)
setInterval(nextSlide, 3000);

// ===== Theme Toggle System =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

  document.body.classList.toggle("dark");

  // Icon Change
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }

});


// Load Saved Theme
window.addEventListener("load", function () {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

});