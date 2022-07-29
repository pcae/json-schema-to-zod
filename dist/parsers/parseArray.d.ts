import { JSONSchema7 } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseArray: (schema: JSONSchema7 & {
    type: "array";
}, ctx: ParseSchemaContext) => string;
