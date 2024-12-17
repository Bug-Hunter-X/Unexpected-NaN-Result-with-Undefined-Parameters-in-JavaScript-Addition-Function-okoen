# Unexpected NaN Result with Undefined Parameters in JavaScript Addition Function

This repository demonstrates a common JavaScript error related to handling null and undefined values in a simple addition function.

## Bug Description

The `foo` function aims to add two numbers. It correctly handles null values by returning null. However, if either parameter is `undefined`, the result is `NaN` instead of a more graceful error handling or a default value.

## Bug and Solution Code

The `bug.js` file contains the buggy code, and `bugSolution.js` presents a corrected version with improved handling of `undefined` values. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`. 
3. Run `bug.js` using a JavaScript interpreter (like Node.js).  Observe the unexpected `NaN` output.
4. Run `bugSolution.js` to see the improved behavior.

## Solution

The corrected version explicitly checks for both `null` and `undefined` values and handles them appropriately, providing a more robust and predictable function.