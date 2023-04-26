import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const listItemString = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/></a></li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', listItemString);

galleryList.addEventListener('click', openOriginalSize);

function openOriginalSize(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const original = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${original}">`);
    instance.show();
    document.addEventListener('keydown', function closeModalOnEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModalOnEsc);
      }
    });
  }
}
