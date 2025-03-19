import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { queryPixabay } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

const formEl = document.querySelector("form");
const inputEl = document.querySelector(".input-form")
const loaderEl = document.querySelector(".loader");

function onOffLoader() {
    loaderEl.classList.toggle('is-hidden');
}




formEl.addEventListener('submit', event => {
    event.preventDefault();
    const query = inputEl.value.trim();
    
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Enter a search query.',
            position: 'topRight'
        })
        return;
    }

    
    onOffLoader();
    queryPixabay(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.info({
                    title: 'No result',
                    message: 'No images found. Please try a different search.',
                    position: 'topRight',
                });
                onOffLoader();
                return;
            }
            renderImages(images);
            onOffLoader();
        })
        .catch(error => {
            console.error(error);
            onOffLoader();
        });
} )
