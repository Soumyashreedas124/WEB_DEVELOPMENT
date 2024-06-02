const images = [box1.jpg, box2.jpg, box3.jpg];

const track = document.querySelector(".carousel_track");

images.forEach((image) => {
  const slide = document.createElement("div");
  slide.className = "carousel_slide";
  const image = document.createElement("div");
  image.className = "carousel_image";
  image.src = image;
  image.alt = "image";
  slide.appendChild(image);
  track.appendChild(slide);
});

const slides = Array.from(track.children);
const currentIndex = 0;
const moveSlides = (index) => {
  currentIndex = index;
  track.computedStyleMap.transform = `translateX(${currentIndex * 100}%)`;
};

const autoSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  moveSlides(currentIndex);
};
