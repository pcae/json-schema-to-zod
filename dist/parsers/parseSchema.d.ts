import { JSONSchema7 } from "json-schema";
export interface ParseSchemaContext {
    editingResult: string;
    currentPropertyKey?: string;
}
export declare const parseSchema: (schema: JSONSchema7 | boolean, ctx: ParseSchemaContext) => string;
