"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.half = void 0;
const half = (arr) => {
    return arr.length ? [arr.slice(0, Math.floor(arr.length / 2)), arr.slice(Math.floor(arr.length / 2))] : [[], []];
};
exports.half = half;
