'use strict';
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const URL_PIXABAY = "https://pixabay.com/api/";
const KEY_PIXABAY = "49287567-80da5b96f25a95ab41aa198b2"


export const queryPixabay = query => 
        axios.get(URL_PIXABAY, {
        params: {
        key: KEY_PIXABAY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.info({
                    title: 'No result',
                    message: 'No images found. Please try a different search.',
                    position: 'topRight',
                });
            }
            
            return response.data.hits; // Завжди повертаємо, навіть якщо пусто
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
            })
            console.error("error: ", error);
            throw error;
        });