function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; //Simple addition operation
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10

//Unexpected behavior when one of the parameters is undefined
console.log(foo(undefined, 5)); // Output: NaN
console.log(foo(5, undefined)); // Output: NaN