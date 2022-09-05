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
