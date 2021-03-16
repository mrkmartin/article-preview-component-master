const btn = document.querySelector(".card__share-btn");
const svgpath = document.querySelector(".card__share-btn-path");
const socialmedia = document.querySelector(".card__social-media");

btn.addEventListener("click", toggleSocialMedia);

function toggleSocialMedia() {
  btn.classList.toggle("card__share-btn--active");
  svgpath .classList.toggle("card__share-btn-path--active");
  socialmedia.classList.toggle("card__social-media--active");
}