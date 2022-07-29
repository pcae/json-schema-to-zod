import { JSONSchema7 } from "json-schema";
export declare const jsonSchemaToZodDereffed: (schema: JSONSchema7, name?: string | undefined, module?: boolean) => Promise<string>;
export declare const jsonSchemaToZod: (schema: JSONSchema7, name?: string | undefined, module?: boolean) => string;
