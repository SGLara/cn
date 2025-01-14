import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * @param inputs - Class names or conditional class values.
 * @returns A single string with merged class names.
 */
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
