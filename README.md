# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `add` function is intended to add two numbers, but due to JavaScript's loose typing, it performs string concatenation when one of the inputs is a string.

## Bug Description
The `add` function incorrectly concatenates strings instead of adding numbers when a string is passed as an argument.  This is a classic example of type coercion in JavaScript leading to unexpected behavior.

## Solution
The solution involves explicitly checking the types of the input arguments or using a stricter type system (e.g., TypeScript) to prevent type coercion from happening.