(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    let mobil = document.getElementById('menu-mobil');
    let hijos = document.querySelectorAll('#menu-mobil ul li a');
    if (mobil.className.includes(' active')) {
        mobil.className = 'menu-mobil';
    }
    else {
        mobil.className += ' active';
    }
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].addEventListener('click', (e) => {
            mobil.className = 'menu-mobil';
        });
    }
};

},{}],2:[function(require,module,exports){
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
        modal.close.addEventListener('click', cerrarModal);
        function cerrarModal() {
            body.className = '';
            modal.modal.className = 'modal-info';
            modal.title.removeChild(title);
            modal.body.removeChild(p);
        }
    });
}
exports.crear_modal = crear_modal;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    let position, destino, distancia, interval;
    const d = document;
    const scroll_element = d.querySelectorAll('.scroll'), back = d.querySelectorAll('.back');
    function inicio() {
        for (let i = 0; i < scroll_element.length; i++) {
            scroll_element[i].addEventListener('click', down);
        }
        for (let i = 0; i < back.length; i++) {
            back[i].addEventListener('click', up);
        }
    }
    function down(e) {
        e.preventDefault();
        destino = this.getAttribute('href');
        // console.log(destino);
        distancia = (d.querySelector(destino).offsetTop - 90);
        // console.log(distancia);
        window.scrollTo(0, distancia);
        // interval = setInterval(()=>{
        //     if (position < distancia) {
        //         position += 30;
        //         console.log(position);
        //         if(position >= distancia) {
        //             clearInterval(interval);
        //         }
        //     } else if(position > distancia) {
        //         position  -= 30;
        //     }
        //     window.scrollTo(0, position)
        // }, 100)
    }
    function up(e) {
        e.preventDefault();
        position = window.scrollY;
        // clearInterval(interval);
        if (position > 0 || position < 0) {
            position = 0;
            // position -= 30;
            // if(position <= 0){
            //     clearInterval(interval);
            // }else {
            //     return;
            // }
            window.scrollTo(0, position);
        }
        // interval = setInterval(()=>{
        // },1500)
    }
    inicio();
}
exports.default = default_1;

},{}],4:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobil_menu_1 = __importDefault(require("./includes/mobil-menu"));
const scroll_1 = __importDefault(require("./includes/scroll"));
const modal_1 = require("./includes/modal");
const d = document;
d.querySelector('#mobil-des').addEventListener('click', mobil_menu_1.default);
(0, scroll_1.default)();
const info_button = d.querySelectorAll('.info');
for (let element of info_button) {
    element.addEventListener('click', modal_1.crear_modal);
}

},{"./includes/mobil-menu":1,"./includes/modal":2,"./includes/scroll":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmNsdWRlcy9tb2JpbC1tZW51LmpzIiwianMvaW5jbHVkZXMvbW9kYWwuanMiLCJqcy9pbmNsdWRlcy9zY3JvbGwuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9ICgpID0+IHtcclxuICAgIGxldCBtb2JpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW1vYmlsJyk7XHJcbiAgICBsZXQgaGlqb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudS1tb2JpbCB1bCBsaSBhJyk7XHJcbiAgICBpZiAobW9iaWwuY2xhc3NOYW1lLmluY2x1ZGVzKCcgYWN0aXZlJykpIHtcclxuICAgICAgICBtb2JpbC5jbGFzc05hbWUgPSAnbWVudS1tb2JpbCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtb2JpbC5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWpvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhpam9zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbW9iaWwuY2xhc3NOYW1lID0gJ21lbnUtbW9iaWwnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gbGV0IGltZ3M6W3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXSA9IFsnaW1nL2d1YWRhw7FhLmpwZWcnLCAnaW1nL2d1YWRhw7FhIDIuanBlZycsICdpbWcvbW90b3NpZXJyYS1zdGlobC1tczIxMC1ub2dhbHBhcmstMTUwMjM3MzgwNC5qcGcnLCAnaW1nL2NpZXJyYTJ4LmpwZycsICdpbWcvaGlkcm9saW1waWFkb3JhLTE2MDBwc2ktZWxlY3Qtc2VtaS1wcm9mLWRvbW9zYS0zMy1obC0xNjAwaS5qcGcnLCAnaW1nL0RfTlFfTlBfODE1NDUyLU1MVjUwMzI1NTk2NjA4XzA2MjAyMi1WLmpwZycsICdpbWcvYm9tYmEtcGVyaWZlcmljYS0xLTItaHAtdHJ1cGVyLWV4cGVydC01ODkuanBnJywgJ2ltZy94NzUwX3N0dWRpb19yNGEwMzIyODhfbGFyZ2VfYWI1OWM3MWFmYWI5N2Y3Mzg1N2Y1ZGZkMTUwZWFhOTI1NWVhZDA2ZS5qcGcnXVxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jcmVhcl9tb2RhbCA9IHZvaWQgMDtcclxuY29uc3QgZCA9IGRvY3VtZW50LCBpbmZvX2J1dHRvbiA9IGQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8nKTtcclxuY29uc3QgYm9keSA9IGQucXVlcnlTZWxlY3RvcignYm9keScpLCB1cmwgPSAnLi4vanMvanNvbi9wcm9kdWN0b3MuanNvbic7XHJcbmxldCBtb2RhbCA9IHtcclxuICAgIG1vZGFsOiBkLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvJyksXHJcbiAgICBpbWdfbW9kYWw6IGQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLW1vZGFsJyksXHJcbiAgICB0aXRsZTogZC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSxcclxuICAgIGJvZHk6IGQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tYm9keScpLFxyXG4gICAgY2xvc2U6IGQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNsb3NlJylcclxufTtcclxuZnVuY3Rpb24gY3JlYXJfbW9kYWwoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGxldCByZXMgPSB5aWVsZCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGxldCBkYXRhID0geWllbGQgcmVzLmpzb24oKTtcclxuICAgICAgICBsZXQgcHJvZCA9IHlpZWxkIGRhdGEucHJvZHVjdG9zO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgbGV0IHRleHQgPSBkLmNyZWF0ZVRleHROb2RlKHByb2RbaWRdLnRleHQpO1xyXG4gICAgICAgIGxldCBwID0gZC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGQuY3JlYXRlVGV4dE5vZGUocHJvZFtpZF0udGl0bGUpO1xyXG4gICAgICAgIG1vZGFsLmltZ19tb2RhbC5zcmMgPSBwcm9kW2lkXS5pbWc7XHJcbiAgICAgICAgbW9kYWwudGl0bGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIG1vZGFsLmJvZHkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnYm9keS1oaWRkZW4nO1xyXG4gICAgICAgIG1vZGFsLm1vZGFsLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XHJcbiAgICAgICAgbW9kYWwuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZXJyYXJNb2RhbCk7XHJcbiAgICAgICAgZnVuY3Rpb24gY2VycmFyTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIG1vZGFsLm1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbC1pbmZvJztcclxuICAgICAgICAgICAgbW9kYWwudGl0bGUucmVtb3ZlQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICBtb2RhbC5ib2R5LnJlbW92ZUNoaWxkKHApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXJfbW9kYWwgPSBjcmVhcl9tb2RhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uLCBkZXN0aW5vLCBkaXN0YW5jaWEsIGludGVydmFsO1xyXG4gICAgY29uc3QgZCA9IGRvY3VtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsX2VsZW1lbnQgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKSwgYmFjayA9IGQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2snKTtcclxuICAgIGZ1bmN0aW9uIGluaWNpbygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbF9lbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbF9lbGVtZW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiYWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRvd24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkZXN0aW5vID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXN0aW5vKTtcclxuICAgICAgICBkaXN0YW5jaWEgPSAoZC5xdWVyeVNlbGVjdG9yKGRlc3Rpbm8pLm9mZnNldFRvcCAtIDkwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0YW5jaWEpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkaXN0YW5jaWEpO1xyXG4gICAgICAgIC8vIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAvLyAgICAgaWYgKHBvc2l0aW9uIDwgZGlzdGFuY2lhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbiArPSAzMDtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHBvc2l0aW9uID49IGRpc3RhbmNpYSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYocG9zaXRpb24gPiBkaXN0YW5jaWEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uICAtPSAzMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pXHJcbiAgICAgICAgLy8gfSwgMTAwKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA+IDAgfHwgcG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLT0gMzA7XHJcbiAgICAgICAgICAgIC8vIGlmKHBvc2l0aW9uIDw9IDApe1xyXG4gICAgICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIH1lbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgLy8gfSwxNTAwKVxyXG4gICAgfVxyXG4gICAgaW5pY2lvKCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2JpbF9tZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jbHVkZXMvbW9iaWwtbWVudVwiKSk7XHJcbmNvbnN0IHNjcm9sbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2luY2x1ZGVzL3Njcm9sbFwiKSk7XHJcbmNvbnN0IG1vZGFsXzEgPSByZXF1aXJlKFwiLi9pbmNsdWRlcy9tb2RhbFwiKTtcclxuY29uc3QgZCA9IGRvY3VtZW50O1xyXG5kLnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbC1kZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vYmlsX21lbnVfMS5kZWZhdWx0KTtcclxuKDAsIHNjcm9sbF8xLmRlZmF1bHQpKCk7XHJcbmNvbnN0IGluZm9fYnV0dG9uID0gZC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mbycpO1xyXG5mb3IgKGxldCBlbGVtZW50IG9mIGluZm9fYnV0dG9uKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxfMS5jcmVhcl9tb2RhbCk7XHJcbn1cclxuIl19
