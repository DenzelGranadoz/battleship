import './styles/style.css';
import image from './assets/title.png';
import init from './scripts/game';

const titleImage = document.querySelector('.title-icon');

titleImage.src = image;

init();
