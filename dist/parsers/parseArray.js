"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArray = void 0;
const parseSchema_1 = require("./parseSchema");
const parseArray = (schema, ctx) => {
    let r = !schema.items
        ? "z.array(z.any())"
        : Array.isArray(schema.items)
            ? `z.tuple([${schema.items.map((item) => (0, parseSchema_1.parseSchema)(item, ctx))}])`
            : `z.array(${(0, parseSchema_1.parseSchema)(schema.items, ctx)})`;
    if (typeof schema.minItems === "number")
        r += `.min(${schema.minItems})`;
    if (typeof schema.maxItems === "number")
        r += `.max(${schema.maxItems})`;
    return r;
};
exports.parseArray = parseArray;
