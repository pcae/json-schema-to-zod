"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnum = void 0;
const parseEnum = (schema, ctx) => {
    const needNativeNum = !!schema.enum.find(item => typeof item === 'number');
    if (needNativeNum && Array.isArray(schema.enum)) {
        const addType = `
const ${ctx.currentPropertyKey} = {
  ${schema.enum.map((item) => `NUMBER_${item}: ${item}`)},
} as const;\n\n`;
        if (ctx.editingResult.slice(0, 6) === 'import') {
            ctx.editingResult = ctx.editingResult.replace(`import {z} from 'zod'\n\n`, `import {z} from 'zod'\n\n${addType}`);
        }
        else {
            ctx.editingResult = addType + ctx.editingResult;
        }
        return `z.nativeEnum(${ctx.currentPropertyKey})`;
    }
    return Array.isArray(schema.enum)
        ? `z.enum([${schema.enum.map((x) => JSON.stringify(x))}])`
        : `z.literal(${JSON.stringify(schema.enum)})`;
};
exports.parseEnum = parseEnum;
