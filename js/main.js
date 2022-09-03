"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobil_menu_1 = __importDefault(require("./includes/mobil-menu"));
const d = document;
d.querySelector('#mobil-des div').addEventListener('click', mobil_menu_1.default);
