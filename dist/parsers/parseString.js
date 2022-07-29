"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString = void 0;
const parseString = (schema) => {
    let r = "z.string()";
    if (schema.pattern)
        r += `.regex(new RegExp(${JSON.stringify(schema.pattern)}))`;
    if (schema.format === "email")
        r += ".email()";
    else if (schema.format === "uri")
        r += ".url()";
    else if (schema.format === "uuid")
        r += ".uuid()";
    if (typeof schema.minLength === "number")
        r += `.min(${schema.minLength})`;
    if (typeof schema.maxLength === "number")
        r += `.max(${schema.maxLength})`;
    return r;
};
exports.parseString = parseString;
