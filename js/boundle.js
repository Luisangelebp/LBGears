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

},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobil_menu_1 = __importDefault(require("./includes/mobil-menu"));
const scroll_1 = __importDefault(require("./includes/scroll"));
const d = document;
d.querySelector('#mobil-des').addEventListener('click', mobil_menu_1.default);
(0, scroll_1.default)();

},{"./includes/mobil-menu":1,"./includes/scroll":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmNsdWRlcy9tb2JpbC1tZW51LmpzIiwianMvaW5jbHVkZXMvc2Nyb2xsLmpzIiwianMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbW9iaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1tb2JpbCcpO1xyXG4gICAgbGV0IGhpam9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUtbW9iaWwgdWwgbGkgYScpO1xyXG4gICAgaWYgKG1vYmlsLmNsYXNzTmFtZS5pbmNsdWRlcygnIGFjdGl2ZScpKSB7XHJcbiAgICAgICAgbW9iaWwuY2xhc3NOYW1lID0gJ21lbnUtbW9iaWwnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbW9iaWwuY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlqb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoaWpvc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1vYmlsLmNsYXNzTmFtZSA9ICdtZW51LW1vYmlsJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uLCBkZXN0aW5vLCBkaXN0YW5jaWEsIGludGVydmFsO1xyXG4gICAgY29uc3QgZCA9IGRvY3VtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsX2VsZW1lbnQgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKSwgYmFjayA9IGQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2snKTtcclxuICAgIGZ1bmN0aW9uIGluaWNpbygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbF9lbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbF9lbGVtZW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiYWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRvd24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkZXN0aW5vID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXN0aW5vKTtcclxuICAgICAgICBkaXN0YW5jaWEgPSAoZC5xdWVyeVNlbGVjdG9yKGRlc3Rpbm8pLm9mZnNldFRvcCAtIDkwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0YW5jaWEpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkaXN0YW5jaWEpO1xyXG4gICAgICAgIC8vIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAvLyAgICAgaWYgKHBvc2l0aW9uIDwgZGlzdGFuY2lhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbiArPSAzMDtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHBvc2l0aW9uID49IGRpc3RhbmNpYSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYocG9zaXRpb24gPiBkaXN0YW5jaWEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uICAtPSAzMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pXHJcbiAgICAgICAgLy8gfSwgMTAwKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA+IDAgfHwgcG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLT0gMzA7XHJcbiAgICAgICAgICAgIC8vIGlmKHBvc2l0aW9uIDw9IDApe1xyXG4gICAgICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIH1lbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgLy8gfSwxNTAwKVxyXG4gICAgfVxyXG4gICAgaW5pY2lvKCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2JpbF9tZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jbHVkZXMvbW9iaWwtbWVudVwiKSk7XHJcbmNvbnN0IHNjcm9sbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2luY2x1ZGVzL3Njcm9sbFwiKSk7XHJcbmNvbnN0IGQgPSBkb2N1bWVudDtcclxuZC5xdWVyeVNlbGVjdG9yKCcjbW9iaWwtZGVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2JpbF9tZW51XzEuZGVmYXVsdCk7XHJcbigwLCBzY3JvbGxfMS5kZWZhdWx0KSgpO1xyXG4iXX0=
