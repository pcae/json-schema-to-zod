import { JSONSchema7, JSONSchema7Type } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseEnum: (schema: JSONSchema7 & {
    enum: JSONSchema7Type[] | JSONSchema7Type;
}, ctx: ParseSchemaContext) => string;
