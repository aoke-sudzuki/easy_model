let sliderList = Array.from(document.querySelector("#slider-list").children),
  slideInterval = 7000;

// Push all slide index in array for comfortable using
let slideArray = [];
sliderList.forEach((slide, index) => {
  slideArray.push(index);
});

console.log(`slideArray: ${slideArray}`);

// Delete all active slides
function delAllActive(sliderList) {
  slideArray.forEach((slide, index) => {
    if (sliderList[index].classList.contains("active")) {
      sliderList[index].classList.remove("active");
    }
  });
}

// Active slide index
let slide = 0;

// Before slide
function prevSlide() {
  let prevSlide = slideArray[slide - 1];
  if (slide == 0) prevSlide = slideArray[slideArray.length - 1];
  Slider((slide = prevSlide));
}

// Next slide
function nextSlide() {
  let nextSlide = slide;
  if (nextSlide + 1 > slideArray.length - 1) nextSlide = 0;
  else nextSlide = slide = slideArray[slide + 1];
  Slider((slide = nextSlide));
}

// Slider
function Slider(slideIndex) {
  if (slideIndex) slideIndex = slideIndex;
  if (!sliderList[0].classList.contains("active")) {
    delAllActive(sliderList);
    sliderList[0].classList.add("active");
  }

  if (slideIndex > sliderList.length - 1) slideIndex = 0;
  delAllActive(sliderList);
  sliderList[slideIndex].classList.add("active");
}
Slider(slide);
setTimeout(() => {
  setInterval(() => {
    nextSlide();
  }, slideInterval);
}, slideInterval);
