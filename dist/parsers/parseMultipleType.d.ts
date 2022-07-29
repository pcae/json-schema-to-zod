import { JSONSchema7, JSONSchema7TypeName } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseMultipleType: (schema: JSONSchema7 & {
    type: JSONSchema7TypeName[];
}, ctx: ParseSchemaContext) => string;
