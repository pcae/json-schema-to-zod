import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseOneOf: (schema: JSONSchema7 & {
    oneOf: JSONSchema7Definition[];
}, ctx: ParseSchemaContext) => string;
