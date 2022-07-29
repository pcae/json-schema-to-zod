"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAllOf = void 0;
const parseSchema_1 = require("./parseSchema");
const half_1 = require("../utils/half");
function parseAllOf(schema, ctx) {
    if (schema.allOf.length === 0) {
        return "z.any()";
    }
    else if (schema.allOf.length === 1) {
        return (0, parseSchema_1.parseSchema)(schema.allOf[0], ctx);
    }
    else {
        const [left, right] = (0, half_1.half)(schema.allOf);
        return `z.intersection(${parseAllOf({ allOf: left }, ctx)},${parseAllOf({
            allOf: right,
        }, ctx)})`;
    }
}
exports.parseAllOf = parseAllOf;
