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
        modal.close.addEventListener('click', () => {
            body.className = '';
            modal.modal.className = 'modal-info';
            modal.title.removeChild(title);
            modal.body.removeChild(p);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmNsdWRlcy9tb2JpbC1tZW51LmpzIiwianMvaW5jbHVkZXMvbW9kYWwuanMiLCJqcy9pbmNsdWRlcy9zY3JvbGwuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbW9iaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1tb2JpbCcpO1xyXG4gICAgbGV0IGhpam9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUtbW9iaWwgdWwgbGkgYScpO1xyXG4gICAgaWYgKG1vYmlsLmNsYXNzTmFtZS5pbmNsdWRlcygnIGFjdGl2ZScpKSB7XHJcbiAgICAgICAgbW9iaWwuY2xhc3NOYW1lID0gJ21lbnUtbW9iaWwnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbW9iaWwuY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlqb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoaWpvc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1vYmlsLmNsYXNzTmFtZSA9ICdtZW51LW1vYmlsJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIGxldCBpbWdzOltzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10gPSBbJ2ltZy9ndWFkYcOxYS5qcGVnJywgJ2ltZy9ndWFkYcOxYSAyLmpwZWcnLCAnaW1nL21vdG9zaWVycmEtc3RpaGwtbXMyMTAtbm9nYWxwYXJrLTE1MDIzNzM4MDQuanBnJywgJ2ltZy9jaWVycmEyeC5qcGcnLCAnaW1nL2hpZHJvbGltcGlhZG9yYS0xNjAwcHNpLWVsZWN0LXNlbWktcHJvZi1kb21vc2EtMzMtaGwtMTYwMGkuanBnJywgJ2ltZy9EX05RX05QXzgxNTQ1Mi1NTFY1MDMyNTU5NjYwOF8wNjIwMjItVi5qcGcnLCAnaW1nL2JvbWJhLXBlcmlmZXJpY2EtMS0yLWhwLXRydXBlci1leHBlcnQtNTg5LmpwZycsICdpbWcveDc1MF9zdHVkaW9fcjRhMDMyMjg4X2xhcmdlX2FiNTljNzFhZmFiOTdmNzM4NTdmNWRmZDE1MGVhYTkyNTVlYWQwNmUuanBnJ11cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY3JlYXJfbW9kYWwgPSB2b2lkIDA7XHJcbmNvbnN0IGQgPSBkb2N1bWVudCwgaW5mb19idXR0b24gPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvJyk7XHJcbmNvbnN0IGJvZHkgPSBkLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgdXJsID0gJy4uL2pzL2pzb24vcHJvZHVjdG9zLmpzb24nO1xyXG5sZXQgbW9kYWwgPSB7XHJcbiAgICBtb2RhbDogZC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mbycpLFxyXG4gICAgaW1nX21vZGFsOiBkLmdldEVsZW1lbnRCeUlkKCdpbWFnZS1tb2RhbCcpLFxyXG4gICAgdGl0bGU6IGQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksXHJcbiAgICBib2R5OiBkLmdldEVsZW1lbnRCeUlkKCdpbmZvLWJvZHknKSxcclxuICAgIGNsb3NlOiBkLmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jbG9zZScpXHJcbn07XHJcbmZ1bmN0aW9uIGNyZWFyX21vZGFsKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBsZXQgcmVzID0geWllbGQgZmV0Y2godXJsKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgbGV0IHByb2QgPSB5aWVsZCBkYXRhLnByb2R1Y3RvcztcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZC5jcmVhdGVUZXh0Tm9kZShwcm9kW2lkXS50ZXh0KTtcclxuICAgICAgICBsZXQgcCA9IGQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkLmNyZWF0ZVRleHROb2RlKHByb2RbaWRdLnRpdGxlKTtcclxuICAgICAgICBtb2RhbC5pbWdfbW9kYWwuc3JjID0gcHJvZFtpZF0uaW1nO1xyXG4gICAgICAgIG1vZGFsLnRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBtb2RhbC5ib2R5LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2JvZHktaGlkZGVuJztcclxuICAgICAgICBtb2RhbC5tb2RhbC5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG4gICAgICAgIG1vZGFsLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICBtb2RhbC5tb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwtaW5mbyc7XHJcbiAgICAgICAgICAgIG1vZGFsLnRpdGxlLnJlbW92ZUNoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgbW9kYWwuYm9keS5yZW1vdmVDaGlsZChwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXJfbW9kYWwgPSBjcmVhcl9tb2RhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uLCBkZXN0aW5vLCBkaXN0YW5jaWEsIGludGVydmFsO1xyXG4gICAgY29uc3QgZCA9IGRvY3VtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsX2VsZW1lbnQgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKSwgYmFjayA9IGQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2snKTtcclxuICAgIGZ1bmN0aW9uIGluaWNpbygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbF9lbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbF9lbGVtZW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiYWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRvd24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkZXN0aW5vID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXN0aW5vKTtcclxuICAgICAgICBkaXN0YW5jaWEgPSAoZC5xdWVyeVNlbGVjdG9yKGRlc3Rpbm8pLm9mZnNldFRvcCAtIDkwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0YW5jaWEpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkaXN0YW5jaWEpO1xyXG4gICAgICAgIC8vIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAvLyAgICAgaWYgKHBvc2l0aW9uIDwgZGlzdGFuY2lhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbiArPSAzMDtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHBvc2l0aW9uID49IGRpc3RhbmNpYSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYocG9zaXRpb24gPiBkaXN0YW5jaWEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uICAtPSAzMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pXHJcbiAgICAgICAgLy8gfSwgMTAwKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA+IDAgfHwgcG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLT0gMzA7XHJcbiAgICAgICAgICAgIC8vIGlmKHBvc2l0aW9uIDw9IDApe1xyXG4gICAgICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIH1lbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgLy8gfSwxNTAwKVxyXG4gICAgfVxyXG4gICAgaW5pY2lvKCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2JpbF9tZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jbHVkZXMvbW9iaWwtbWVudVwiKSk7XHJcbmNvbnN0IHNjcm9sbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2luY2x1ZGVzL3Njcm9sbFwiKSk7XHJcbmNvbnN0IG1vZGFsXzEgPSByZXF1aXJlKFwiLi9pbmNsdWRlcy9tb2RhbFwiKTtcclxuY29uc3QgZCA9IGRvY3VtZW50O1xyXG5kLnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbC1kZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vYmlsX21lbnVfMS5kZWZhdWx0KTtcclxuKDAsIHNjcm9sbF8xLmRlZmF1bHQpKCk7XHJcbmNvbnN0IGluZm9fYnV0dG9uID0gZC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mbycpO1xyXG5mb3IgKGxldCBlbGVtZW50IG9mIGluZm9fYnV0dG9uKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxfMS5jcmVhcl9tb2RhbCk7XHJcbn1cclxuIl19
