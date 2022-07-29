"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIfThenElse = void 0;
const parseSchema_1 = require("./parseSchema");
const parseIfThenElse = (schema, ctx) => {
    const $if = (0, parseSchema_1.parseSchema)(schema.if, ctx);
    const $then = (0, parseSchema_1.parseSchema)(schema.then, ctx);
    const $else = (0, parseSchema_1.parseSchema)(schema.else, ctx);
    return `z.union([${$then},${$else}]).superRefine((value,ctx) => {
  const result = ${$if}.safeParse(value).success
    ? ${$then}.safeParse(value)
    : ${$else}.safeParse(value);
  if (!result.success) {
    result.error.errors.forEach((error) => ctx.addIssue(error))
  }
})`;
};
exports.parseIfThenElse = parseIfThenElse;
