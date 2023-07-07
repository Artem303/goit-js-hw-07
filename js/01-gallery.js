import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const head = document.querySelector("head");
const body = document.querySelector("body");
const listGallery = document.querySelector(".gallery");

const listGalleryImg = createItems(galleryItems);

function createItems(galleryItems) {
  return galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
}
listGallery.innerHTML = listGalleryImg;
listGallery.addEventListener("click", onOpenImg);

function onOpenImg(evt) {
  window.addEventListener("keydown", onEscCloseModal);
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}" alt="">
   `);
  instance.show();

  function onEscCloseModal(evt) {
    if (evt.keyCode === 27) {
      instance.close();
      window.removeEventListener("keydown", onEscCloseModal);
    }
  }
}

const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
document.body.appendChild(script);

const styleModal = document.createElement("link");
styleModal.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
styleModal.rel = "stylesheet";
document.head.appendChild(styleModal);
