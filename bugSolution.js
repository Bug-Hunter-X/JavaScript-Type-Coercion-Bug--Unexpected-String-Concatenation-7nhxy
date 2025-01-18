function add(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(add(1, '2')); // Output: Error: Inputs must be numbers
console.log(add(1, 2));    // Output: 3