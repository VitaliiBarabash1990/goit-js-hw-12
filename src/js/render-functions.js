import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` 
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
         <div class="info-gallery">
          <p class="info-gallery-item"><b>Likes</b>${likes}</p>
          <p class="info-gallery-item"><b>Views</b>${views}</p>
          <p class="info-gallery-item"><b>Comments</b>${comments}</p>
          <p class="info-gallery-item"><b>Downloads</b>${downloads}</p>
        </div>
        </a>
    `
    )
    .join('');
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message,
  });
}
