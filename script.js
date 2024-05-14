const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let imagesLength = images.length;
let clickedImageNum = 0;

function handleClickImage(event) {
  if (!event.target.closest(".image") || event.target.classList.contains("big"))
    return;

  const clickedImage = event.target;
  const clickedImageIndex = Array.from(images).indexOf(clickedImage);

  clickedImageNum = clickedImageIndex;

  classBig(images[clickedImageNum]);
  updateNavigationButtons();
}

function swapImages(event) {
  const btn = event.currentTarget;

  const bigImage = document.querySelector(".big");
  const bigImageIndex = Array.from(images).indexOf(bigImage);

  const direction = btn === nextBtn ? 1 : -1;
  clickedImageNum = bigImageIndex + direction;

  classBig(images[clickedImageNum]);
  updateNavigationButtons();
}

function classBig(click) {
  const bigImage = document.querySelector(".big");
  click.classList.add("big");
  bigImage.classList.remove("big");
}

function updateNavigationButtons() {
  prevBtn.disabled = clickedImageNum === 0;
  nextBtn.disabled = clickedImageNum === imagesLength - 1 || imagesLength === 1;
}

updateNavigationButtons();

imagesContainer.addEventListener("click", handleClickImage);
prevBtn.addEventListener("click", swapImages);
nextBtn.addEventListener("click", swapImages);
