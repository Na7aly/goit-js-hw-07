import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Get the ul.gallery element
const galleryContainer = document.querySelector('.gallery');

// Render gallery items
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
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  listItem.appendChild(link);
  galleryContainer.appendChild(listItem);
});

// Add event listener to the gallery container
galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Check if a gallery image was clicked
    if (event.target.classList.contains('gallery__image')) {
      // Get the source of the original image
      const source = event.target.dataset.source;
  
      // Open the modal using basicLightbox
      const instance = basicLightbox.create(`<img src="${source}" alt="Modal Image">`);
      instance.show();
    }
  });
