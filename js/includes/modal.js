"use strict";
// let imgs:[string, string, string, string, string, string, string, string] = ['img/guadaña.jpeg', 'img/guadaña 2.jpeg', 'img/motosierra-stihl-ms210-nogalpark-1502373804.jpg', 'img/cierra2x.jpg', 'img/hidrolimpiadora-1600psi-elect-semi-prof-domosa-33-hl-1600i.jpg', 'img/D_NQ_NP_815452-MLV50325596608_062022-V.jpg', 'img/bomba-periferica-1-2-hp-truper-expert-589.jpg', 'img/x750_studio_r4a032288_large_ab59c71afab97f73857f5dfd150eaa9255ead06e.jpg']
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crear_modal = void 0;
const d = document, info_button = d.querySelectorAll('.info');
const body = d.querySelector('body'), url = '../js/json/productos.json';
let modal = {
    modal: d.querySelector('#modal-info'),
    img_modal: d.getElementById('image-modal'),
    title: d.getElementById('title'),
    body: d.getElementById('info-body'),
    close: d.getElementById('modal-close')
};
function crear_modal() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(url);
        let data = yield res.json();
        let prod = yield data.productos;
        let id = this.id;
        let text = d.createTextNode(prod[id].text);
        let p = d.createElement("p");
        p.appendChild(text);
        let title = d.createTextNode(prod[id].title);
        modal.img_modal.src = prod[id].img;
        modal.title.appendChild(title);
        modal.body.appendChild(p);
        body.className = 'body-hidden';
        modal.modal.className += ' active';
        modal.close.addEventListener('click', () => {
            body.className = '';
            modal.modal.className = 'modal-info';
            modal.title.removeChild(title);
            modal.body.removeChild(p);
        });
    });
}
exports.crear_modal = crear_modal;
