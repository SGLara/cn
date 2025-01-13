"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = void 0;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * @param inputs - Class names or conditional class values.
 * @returns A single string with merged class names.
 */
const cn = (...inputs) => {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
};
exports.cn = cn;
