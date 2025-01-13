import { ClassValue } from "clsx";
/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * @param inputs - Class names or conditional class values.
 * @returns A single string with merged class names.
 */
export declare const cn: (...inputs: ClassValue[]) => string;
