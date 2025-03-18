// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const params = {
    captionsData: 'alt',
    captionDelay: 250,
}
const galleryEl = document.querySelector(".gallery");

let lightbox = new SimpleLightbox('.gallery a', params);

function clearSimpleBox() {
    galleryEl.innerHTML = '';
}


export const renderImages = images => {
    clearSimpleBox();
    const markup = images.map(({
        tags,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads }) => {
        return `<a class="gallery-item" href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" />
            <div class="info">
              <p><b>Likes:</b> ${likes}</p>
              <p><b>Views:</b> ${views}</p>
              <p><b>Comments:</b> ${comments}</p>
              <p><b>Downloads:</b> ${downloads}</p>
            </div>
          </div>
        </a>`;   
    }).join('');
    galleryEl.insertAdjacentHTML('beforeend',markup);
    lightbox.refresh();
}
lightbox.on('shown.simplelightbox', function () {
    const currentLink = document.querySelector('.sl-current .sl-image').parentElement;

    const likes = currentLink.dataset.likes;
    const views = currentLink.dataset.views;
    const comments = currentLink.dataset.comments;
    const downloads = currentLink.dataset.downloads;

    iziToast.show({
        title: 'Image Info',
        message: `
            <ul >
                <li>❤️ Likes: <b>${likes}</b></li>
                <li>👁️ Views: <b>${views}</b></li>
                <li>💬 Comments: <b>${comments}</b></li>
                <li>⬇️ Downloads: <b>${downloads}</b></li>
            </ul>
        `,
        position: 'bottomRight',
        timeout: 5000,
        close: false,
        progressBar: true,
    });
});


// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

// with jQuery nearly the same
// let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });
