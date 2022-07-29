import { JSONSchema7 } from "json-schema";
import { ParseSchemaContext } from "./parseSchema";
export declare const parseObject: (schema: JSONSchema7 & {
    type: "object";
}, ctx: ParseSchemaContext) => string;
