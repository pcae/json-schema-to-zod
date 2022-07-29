"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSchema = void 0;
const parseAnyOf_1 = require("./parseAnyOf");
const parseBoolean_1 = require("./parseBoolean");
const parseDefault_1 = require("./parseDefault");
const parseMultipleType_1 = require("./parseMultipleType");
const parseNot_1 = require("./parseNot");
const parseNull_1 = require("./parseNull");
const parseAllOf_1 = require("./parseAllOf");
const parseArray_1 = require("./parseArray");
const parseConst_1 = require("./parseConst");
const parseEnum_1 = require("./parseEnum");
const parseIfThenElse_1 = require("./parseIfThenElse");
const parseNumber_1 = require("./parseNumber");
const parseObject_1 = require("./parseObject");
const parseString_1 = require("./parseString");
const parseOneOf_1 = require("./parseOneOf");
const parseSchema = (schema, ctx) => {
    if (typeof schema !== "object")
        return "z.unknown()";
    let parsed = selectParser(schema, ctx);
    parsed = addMeta(schema, parsed);
    return parsed;
};
exports.parseSchema = parseSchema;
const addMeta = (schema, parsed) => {
    if (schema.description)
        parsed += `.describe(${JSON.stringify(schema.description)})`;
    return parsed;
};
const selectParser = (schema, ctx) => {
    if (its.an.object(schema)) {
        return (0, parseObject_1.parseObject)(schema, ctx);
    }
    else if (its.an.array(schema)) {
        return (0, parseArray_1.parseArray)(schema, ctx);
    }
    else if (its.a.multipleType(schema)) {
        return (0, parseMultipleType_1.parseMultipleType)(schema, ctx);
    }
    else if (its.an.anyOf(schema)) {
        return (0, parseAnyOf_1.parseAnyOf)(schema, ctx);
    }
    else if (its.an.allOf(schema)) {
        return (0, parseAllOf_1.parseAllOf)(schema, ctx);
    }
    else if (its.a.oneOf(schema)) {
        return (0, parseOneOf_1.parseOneOf)(schema, ctx);
    }
    else if (its.a.not(schema)) {
        return (0, parseNot_1.parseNot)(schema);
    }
    else if (its.an.enum(schema)) {
        return (0, parseEnum_1.parseEnum)(schema, ctx); //<-- needs to come before primitives
    }
    else if (its.a.const(schema)) {
        return (0, parseConst_1.parseConst)(schema);
    }
    else if (its.a.primitive(schema, "string")) {
        return (0, parseString_1.parseString)(schema);
    }
    else if (its.a.primitive(schema, "number") ||
        its.a.primitive(schema, "integer")) {
        return (0, parseNumber_1.parseNumber)(schema);
    }
    else if (its.a.primitive(schema, "boolean")) {
        return (0, parseBoolean_1.parseBoolean)(schema);
    }
    else if (its.a.primitive(schema, "null")) {
        return (0, parseNull_1.parseNull)(schema);
    }
    else if (its.a.conditional(schema)) {
        return (0, parseIfThenElse_1.parseIfThenElse)(schema, ctx);
    }
    else {
        return (0, parseDefault_1.parseDefault)(schema);
    }
};
const its = {
    an: {
        object: (x) => x.type === "object",
        array: (x) => x.type === "array",
        anyOf: (x) => !!x.anyOf,
        allOf: (x) => !!x.allOf,
        enum: (x) => !!x.enum,
    },
    a: {
        multipleType: (x) => Array.isArray(x.type),
        not: (x) => !!x.not,
        const: (x) => !!x.const,
        primitive: (x, p) => x.type === p,
        conditional: (x) => Boolean(x.if && x.then && x.else),
        oneOf: (x) => !!x.oneOf,
    },
};
