
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const placeForGallery = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description})=> `<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>`).join('');

placeForGallery.innerHTML = markupGallery;

const  lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});