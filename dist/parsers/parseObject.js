"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObject = void 0;
const parseSchema_1 = require("./parseSchema");
const requiredFlag = ""; //".required()"
const defaultAdditionalFlag = ""; //".strip()"
const parseObject = (schema, ctx) => {
    var _a;
    return !schema.properties
        ? typeof schema.additionalProperties === "object"
            ? `z.record(${(0, parseSchema_1.parseSchema)(schema.additionalProperties, ctx)})`
            : "z.object({}).catchall(z.any())"
        : `z.object({${Object.entries((_a = schema === null || schema === void 0 ? void 0 : schema.properties) !== null && _a !== void 0 ? _a : {}).map(([k, v]) => {
            var _a;
            ctx.currentPropertyKey = k;
            return `${JSON.stringify(k)}:${(0, parseSchema_1.parseSchema)(v, ctx)}${((_a = schema.required) === null || _a === void 0 ? void 0 : _a.includes(k)) ? requiredFlag : ".optional()"}`;
        })}})${schema.additionalProperties === true
            ? ".catchall(z.any())"
            : schema.additionalProperties === false
                ? ".strict()"
                : typeof schema.additionalProperties === "object"
                    ? `.catchall(${(0, parseSchema_1.parseSchema)(schema.additionalProperties, ctx)})`
                    : defaultAdditionalFlag}`;
};
exports.parseObject = parseObject;
