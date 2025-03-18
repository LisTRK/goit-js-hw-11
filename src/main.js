import iziToast from "izitoast";
import { queryPixabay } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

const formEl = document.querySelector("form");
const inputEl = document.querySelector(".input-form")
function onOffLoader() {
    loaderEl.classList.toggle('is-hidden');
}


onOffLoader();

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
    queryPixabay(query)
        .then(images => {
            renderImages(images);
            onOffLoader();
        })
        .catch(error => {
            console.error(error);
            onOffLoader();
        });
} )
