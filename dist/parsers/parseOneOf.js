"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOneOf = void 0;
const parseSchema_1 = require("./parseSchema");
const parseOneOf = (schema, ctx) => {
    return `z.any().superRefine((x, ctx) => {
    const schemas = [${schema.oneOf.map((item) => (0, parseSchema_1.parseSchema)(item, ctx))}];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })`;
};
exports.parseOneOf = parseOneOf;
