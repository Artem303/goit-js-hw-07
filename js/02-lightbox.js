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
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
}

listGallery.innerHTML = listGalleryImg;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
