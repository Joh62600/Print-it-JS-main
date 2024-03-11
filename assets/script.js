const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideIndex = 0;


const banner = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const tagLine = document.querySelector('#banner p')


for (let i = 0; i < slides.length; i++) {
  const spanDot = document.createElement("span");
  spanDot.classList.add("dot");
  spanDot.addEventListener("click", () => {
    slideIndex = i;
    showSlide();
  });
  dots.appendChild(spanDot);
}
function highlightCurrentDot() {
  const allDots = document.querySelectorAll(".dot");
  for ( let index= 0;  index < allDots.length; index++) {
    const dot = allDots[index];
    if (index === slideIndex) {
        dot.classList.add('dot_selected');
    }else {
        dot.classList.remove('dot_selected');
    } 
}}
highlightCurrentDot();


arrowLeft.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  } 
  console.log(slideIndex);
  showSlide();
});

arrowRight.addEventListener("click", () => {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  console.log(slideIndex);
  showSlide();
});

function showSlide() {
  banner.style.backgroundImage = `url('./assets/images/slideshow/${slides[slideIndex].image}')`;
  tagLine.innerHTML = slides[slideIndex].tagLine;
  highlightCurrentDot();
}
