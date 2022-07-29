import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseAnyOf: (schema: JSONSchema7 & {
    anyOf: JSONSchema7Definition[];
}, ctx: ParseSchemaContext) => string;
