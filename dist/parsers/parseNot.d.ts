import { JSONSchema7, JSONSchema7Definition } from "json-schema";
export declare const parseNot: (schema: JSONSchema7 & {
    not: JSONSchema7Definition;
}) => string;
