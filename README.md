# cn - A Utility for Tailwind CSS Class Name Management

A utility function that combines the power of `clsx` and `tailwind-merge` for seamless management of Tailwind CSS class names.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- Merges Tailwind CSS class names with priority management.
- Supports conditional class names with the flexibility of `clsx`.
- Simplifies dynamic class name handling in TypeScript and JavaScript projects.

## Installation

Install the package via npm:

```bash
npm install @sglara/cn
```

## Usage

### Import the Function

```typescript
import { cn } from "@sglara/cn";
```

### Examples

#### Basic Usage

```typescript
const className = cn("bg-red-500", "text-white", "bg-blue-500");
console.log(className); // "text-white bg-blue-500"
```

#### Conditional Classes

```typescript
const isActive = true;
const className = cn("bg-red-500", {
  "text-white": isActive,
  "text-gray-500": !isActive,
});
console.log(className); // "bg-red-500 text-white"
```

#### Merging Tailwind Classes

```typescript
const className = cn("p-4", "p-2");
console.log(className); // "p-2"
```

#### Using with Arrays

```typescript
const className = cn("bg-red-500", ["text-white", "rounded-lg"]);
console.log(className); // "bg-red-500 text-white rounded-lg"
```

### TypeScript Support

The function fully supports TypeScript with type definitions for safe and predictable usage:

```typescript
const className = cn("bg-red-500", { "text-white": true, hidden: false });
// TypeScript will catch errors for invalid inputs.
```

## Why Use This Package?

- **Simplify Tailwind CSS Class Management**: Avoid repetitive and conflicting class name issues.
- **Typed Support**: Works seamlessly with both JavaScript and TypeScript.
- **Lightweight**: Combines two efficient libraries (`clsx` and `tailwind-merge`) into one handy utility.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
