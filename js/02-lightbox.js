import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Get the ul.gallery element
const galleryContainer = document.querySelector('.gallery');

// Render gallery items (reusing code from the first exercise)
galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);
  galleryContainer.appendChild(listItem);
});

// Initialize SimpleLightbox after gallery items are created
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
