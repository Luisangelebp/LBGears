import mobil from './includes/mobil-menu';
import scroll from './includes/scroll';
import {crear_modal} from './includes/modal';
const d = document;
d.querySelector('#mobil-des')!.addEventListener('click', mobil)
scroll();

const info_button = d.querySelectorAll('.info');

for (let element of info_button) {
    element.addEventListener('click', crear_modal);
}