import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare function parseAllOf(schema: JSONSchema7 & {
    allOf: JSONSchema7Definition[];
}, ctx: ParseSchemaContext): string;
