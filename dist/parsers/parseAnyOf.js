"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAnyOf = void 0;
const parseSchema_1 = require("./parseSchema");
const parseAnyOf = (schema, ctx) => {
    return `z.union([${schema.anyOf.map(item => (0, parseSchema_1.parseSchema)(item, ctx))}])`;
};
exports.parseAnyOf = parseAnyOf;
