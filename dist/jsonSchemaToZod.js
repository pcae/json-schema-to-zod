"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemaToZod = exports.jsonSchemaToZodDereffed = void 0;
const parseSchema_1 = require("./parsers/parseSchema");
const format_1 = require("./utils/format");
const json_schema_ref_parser_1 = __importDefault(require("@apidevtools/json-schema-ref-parser"));
const jsonSchemaToZodDereffed = (schema, name, module = true) => json_schema_ref_parser_1.default
    .dereference(schema)
    .then((schema) => (0, exports.jsonSchemaToZod)(schema, name, module));
exports.jsonSchemaToZodDereffed = jsonSchemaToZodDereffed;
const jsonSchemaToZod = (schema, name, module = true) => {
    const ctx = {
        editingResult: `${module ? `import {z} from 'zod'\n\nexport ` : ""}${name ? `const ${name}=` : module ? "default " : "const schema="}`
    };
    const result = (0, parseSchema_1.parseSchema)(schema, ctx);
    return (0, format_1.format)(ctx.editingResult + result);
};
exports.jsonSchemaToZod = jsonSchemaToZod;
